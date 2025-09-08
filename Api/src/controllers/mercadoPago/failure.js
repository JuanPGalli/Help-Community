// * La información que envía mercado pago, la envía por query
module.exports = (req, res) => {
  console.log(req.query);
  // res.send('Pago rechazado')
  res.redirect('https://help-community-ecommerce.vercel.app/shoppingCart');
};

//'https://help-community-theta.vercel.app' --> deploy grupal
