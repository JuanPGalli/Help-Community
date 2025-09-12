// * La información que envía mercado pago, la envía por query
const mercadopago = require('mercadopago');
const getUserByEmail = require('../getUserByEmail');
const productStockController = require('../productStockController');
const createBuys = require('../createBuys');
require('dotenv').config();
const emailBuyConfirmation = require('../emailBuyConfirmation');
const { clearShoppingCarByUserId } = require('../shoppingCarController');

// crear funcion para crear la compra en base al id del usuario
//llamar a la funcion en webhook y pasarle all data que contiene el comprobante y el id del usuario
//crear rutas get para poder traer las compras que coreespondan a cada usuario en base a su id que lo sacas con la funcion getUserByEmail
// crear ruta get de todas las compras de todos los usuarios para que el admin pueda ver todas las transacciones

const receiveWebhook = async (req, res) => {
  const payment = req.query;
  const emailUser = req.query.email;
  const userUuId = await getUserByEmail(emailUser);

  try {
    if (payment?.type === 'payment') {
      const data = await mercadopago.payment.findById(payment['data.id']);
      const paymentId = data.response.id;
      const orderId = await data.body.order.id;
      const items = await data.response.additional_info.items;
      const payer = await data.response.payer;
      const transaction = await data.response.transaction_details;
      const status = await data.response.status;
      const statusDetail = await data.response.status_detail;

      // let allData = [{ items, payer, transaction, status, statusDetail }];

      // allData = [[...allData], [userUuId]];

      // antes de tocar stock, verificá si ya existe la compra
      const exists = await Buys.findOne({ where: { mp_payment_id: paymentId } });
      if (exists) return res.sendStatus(204);

      //await createBuys(allData);

      await createBuys([
        [{ items, payer, transaction, status, statusDetail }],
        [userUuId],
        paymentId,
      ]);

      if (status === 'approved') {
        productStockController(items);
        //Nuevo - agregamos el clear del carrito
        if (userUuId) {
          await clearShoppingCarByUserId(userUuId);
        }
      }
      await emailBuyConfirmation(emailUser, items);
      res.sendStatus(204);
    }
  } catch (error) {
    console.log(error);
    res.status(404).json({ error: error.message });
  }
};
module.exports = receiveWebhook;
