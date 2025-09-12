const { Buys } = require('../db');

const createBuys = async (allData) => {
  /*  console.log(allData);
        //allData = [[...allData], [userUuId]]
        try {
            const products= allData[0]
        let userId= allData[1]
        userId = userId[0]

        const createBuy = await Buys.create({
            userId,
            products,
        })
        return createBuy
        } catch (error) {
        console.log(error.message)
        } */
  try {
    const products = allData[0];
    let userId = allData[1][0];

    // si en allData también pasás paymentId:
    const mp_payment_id = allData[2]; // p.ej. data.response.id

    // evitar duplicado por mp_payment_id (unique en DB si podés)
    const [buy, created] = await Buys.findOrCreate({
      where: { mp_payment_id },
      defaults: { userId, products },
    });

    return buy;
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = createBuys;
