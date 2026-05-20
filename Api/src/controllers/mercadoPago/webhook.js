const mercadopago = require('mercadopago');
const getUserByEmail = require('../getUserByEmail');
const productStockController = require('../productStockController');
const createBuys = require('../createBuys');
const { clearShoppingCarByUserId } = require('../shoppingCarController');
const { Buys } = require('../../db'); // <- asegurate de requerir el modelo Buys si lo usás
require('dotenv').config();
const emailBuyConfirmation = require('../emailBuyConfirmation');

const receiveWebhook = async (req, res) => {
  try {
    console.log('--- INCOMING WEBHOOK ---');
    console.log('query:', req.query);
    console.log('body:', req.body);

    // MercadoPago puede enviar notificación en body. También a veces llegan datos en query (según configuración).
    // Buscamos un payment id en varios lugares:
    const paymentId =
      req.body?.data?.id ||
      req.query?.['data.id'] ||
      req.body?.id ||
      req.body?.resource?.id ||
      req.query?.id;

    // si no hay id, devolvemos 204 (o logeamos para inspección)
    if (!paymentId) {
      console.log('No payment id found in webhook payload. Ignoring.');
      return res.sendStatus(204);
    }

    // obtener la notificación completa desde MercadoPago
    const data = await mercadopago.payment.findById(paymentId);
    // data puede venir en data.body o data.response según versión del SDK
    const mpBody = data.body || data.response || {};
    console.log('mercadopago.payment.findById ->', mpBody);

    const paymentItems = mpBody?.additional_info?.items || mpBody?.items || [];
    const payer = mpBody?.payer || mpBody?.payer?.id || {};
    const transaction = mpBody?.transaction_details || {};
    const status = mpBody?.status || '';
    const statusDetail = mpBody?.status_detail || '';

    // revisamos si ya existe la compra para evitar duplicados
    const exists = await Buys.findOne({ where: { mp_payment_id: paymentId } });
    if (exists) {
      console.log('Compra ya existe en BD, no duplicar. mp_payment_id=', paymentId);
      return res.sendStatus(204);
    }

    // creamos la compra en la BD
    const metadata = mpBody?.metadata || {};

    const emailUser = req.query.email || metadata.email || '';

    const userUuId = metadata.user_id || (emailUser ? await getUserByEmail(emailUser) : null);

    await createBuys([
      [
        {
          items: paymentItems,
          payer,
          transaction,
          status,
          statusDetail,
        },
      ],
      [userUuId],
      paymentId,
    ]);

    console.log('STATUS RECIBIDO from MP:', status);

    if (String(status).toLowerCase() === 'approved') {
      console.log('Webhook aprobado, actualizando stock…', paymentItems);
      // Asegurate que items tengan { id, quantity } - si vienen con otro shape adaptá:
      const mappedItems = paymentItems.map((it) => ({
        id: it.id || it.product_id || it.product?.id || it.sku || it.title,
        quantity: Number(it.quantity || it.qty || 1),
      }));
      await productStockController(mappedItems);
      // limpiar carrito si corresponde
      const userUuId = emailUser ? await getUserByEmail(emailUser) : null;
      if (userUuId) await clearShoppingCarByUserId(userUuId);
    }

    // enviar confirmación interna
    if (emailUser) {
      await emailBuyConfirmation(emailUser, paymentItems);
    }

    return res.sendStatus(200);
  } catch (error) {
    console.error('ERROR en webhook:', error);
    return res.status(500).json({ error: error.message });
  }
};

module.exports = receiveWebhook;
