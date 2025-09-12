const mercadopago = require('mercadopago');
require('dotenv').config();

const { ACCESS_TOKEN } = process.env;
// * Configurar mercado pago
// esto vendria a ser un post de creae una orden
/* const createOrder = async (req, res) => {
  mercadopago.configure({
    access_token: ACCESS_TOKEN,
  });
  const pictureUrl = req.body[0].image;
  const products = req.body[0];
  let email;
  console.log(req.body);
  let items = [];
  if (products.length >= 1) {
    for (const prod of products) {
      const pictureUrl = prod.product.image;
      const item = {
        title: prod.product.name,
        id: prod.product.id,
        unit_price: prod.product.price,
        currency_id: 'ARS',
        quantity: prod.product.quantity || 1,
        picture_url: pictureUrl,
      };
      items.push(item);
    }
    email = req.body[1].email;
    console.log(email);
  } else {
    items = [
      {
        title: req.body[0].name,
        id: req.body[0].id,
        unit_price: req.body[0].price,
        currency_id: 'ARS',
        quantity: req.body.quantity || 1,
        userEmail: req.body[0].email,
        picture_url: pictureUrl,
      },
    ];
    email = req.body[0].email;
  }
  console.log(items);
  const result = await mercadopago.preferences.create({
    items: items,

    // ? Darle el control a mercado pago...
    back_urls: {
      success: 'https://help-community-production.up.railway.app/payment/success',
      failure: 'https://help-community-production.up.railway.app/payment/failure',
      pending: 'https://help-community-production.up.railway.app/payment/pending', //cuando el usuario no ha pagado
    },

    notification_url: `https://help-community-production.up.railway.app/payment/webhook?email=${email}`,

    // ? Perdon Juan, copie mi puerto arriba del tuyo
    // ? Perdon Juan, copie mi puerto arriba del tuyo
    // ? Perdon Juan, copie mi puerto arriba del tuyo
    // notification_url: `https://pmcmwdd1-3001.brs.devtunnels.ms/payment/webhook?email=${email}`, // Puerto de gonzalo freddi si quieren probar cambien la url con su puerto https
    // notification_url: `https://312d05tj-3001.brs.devtunnels.ms/payment/webhook?email=${email}`, // Puerto de Lucas Caruso, idem Gonzalo Freddi ;)
  });

  res.send(result.body);
}; */

const createOrder = async (req, res) => {
  mercadopago.configure({ access_token: process.env.ACCESS_TOKEN });

  // OJO: tu payload viene como [[...cart], { email }, { total }]
  const products = req.body[0];
  const email = (req.body[1] && req.body[1].email) || '';

  // mapear items con quantity correcta (ver punto D más abajo)
  const items = Array.isArray(products)
    ? products.map((prod) => {
        const p = prod.product || prod; // por si viene anidado
        return {
          title: p.name || p.title,
          id: p.id,
          unit_price: Number(p.price),
          currency_id: 'ARS',
          quantity: Number(p.quantity || prod.quantity || 1),
          picture_url: p.image || p.thumbnail,
        };
      })
    : [
        {
          title: req.body[0].name,
          id: req.body[0].id,
          unit_price: Number(req.body[0].price),
          currency_id: 'ARS',
          quantity: Number(req.body.quantity || 1),
          picture_url: req.body[0].image,
        },
      ];

  const result = await mercadopago.preferences.create({
    items,
    back_urls: {
      success: 'https://help-community-production.up.railway.app/payment/success',
      failure: 'https://help-community-production.up.railway.app/payment/failure',
      pending: 'https://help-community-production.up.railway.app/payment/pending',
    },
    auto_return: 'approved',

    // 👇 Nuevo: metadata con email y userId (si lo tenés en el body)
    metadata: {
      email: email,
      user_id: req.body?.[1]?.userId || null, // opcional si lo mandás desde el front
    },

    notification_url: `https://help-community-production.up.railway.app/payment/webhook?email=${email}`,
    // notification_url: `https://pmcmwdd1-3001.brs.devtunnels.ms/payment/webhook?email=${email}`, // Colocar mi puerto para probar MP en localhost
  });

  res.send(result.body);
};

module.exports = createOrder;
