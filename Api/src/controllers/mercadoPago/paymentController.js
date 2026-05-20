const mercadopago = require('mercadopago');
require('dotenv').config();

const createOrder = async (req, res) => {
  try {
    mercadopago.configure({ access_token: process.env.ACCESS_TOKEN });

    // payload: [ itemsArray, { email, userId? }, { total? } ]
    const products = req.body?.[0] || [];
    const email = (req.body?.[1] && req.body[1].email) || '';
    const userId = req.body?.[1]?.userId || null;

    const items = Array.isArray(products)
      ? products.map((prod) => {
          const p = prod.product || prod;
          return {
            title: p.name || p.title,
            id: p.id,
            unit_price: Number(p.price),
            currency_id: 'ARS',
            quantity: Number(p.quantity || prod.quantity || 1),
            picture_url: p.image || p.thumbnail || '',
          };
        })
      : [
          {
            title: req.body[0]?.name || 'Item',
            id: req.body[0]?.id,
            unit_price: Number(req.body[0]?.price || 0),
            currency_id: 'ARS',
            quantity: Number(req.body[0]?.quantity || 1),
            picture_url: req.body[0]?.image || '',
          },
        ];

    const notificationUrl = process.env.NGROK_URL
      ? `${process.env.NGROK_URL.replace(/\/$/, '')}/payment/webhook?email=${encodeURIComponent(
          email,
        )}`
      : `https://help-community-ecommerce.vercel.app/payment/webhook?email=${encodeURIComponent(
          email,
        )}`;

    const result = await mercadopago.preferences.create({
      items,
      back_urls: {
        success:
          process.env.BACK_URL_SUCCESS ||
          'https://help-community-ecommerce.vercel.app/shoppingCart',
        failure: process.env.BACK_URL_FAILURE || 'https://help-community-ecommerce.vercel.app/',
        pending: process.env.BACK_URL_PENDING || 'https://help-community-ecommerce.vercel.app/',
      },
      /* auto_return: 'approved', */
      metadata: {
        email,
        user_id: userId,
      },
      notification_url: notificationUrl,
    });

    console.log('MP preference created:', JSON.stringify(result.body, null, 2));
    return res.json(result.body);
  } catch (error) {
    console.error('Error creating MP preference:', error);
    return res.status(500).json({ error: error.message });
  }
};

module.exports = createOrder;
