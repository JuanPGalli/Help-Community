const { Product } = require('../db');

const productStockController = async (items) => {
  /* try {
    items.map(async (item) => {
      const quantityActual = await Product.findAll({
        where: { id: item.id },
        attributes: ['stock'],
      });
      const finalStock = quantityActual[0].dataValues.stock - item.quantity;
      await Product.update(
        {
          stock: finalStock,
        },
        { where: { id: item.id } },
      );
    });
  } catch (error) {
    console.error('Error al actualizar el stock:', error.message);
  } */
  try {
    await Promise.all(
      items.map(async (item) => {
        const prod = await Product.findByPk(item.id, { attributes: ['stock'] });
        const finalStock = (prod?.stock ?? 0) - Number(item.quantity || 1);
        await Product.update({ stock: finalStock }, { where: { id: item.id } });
      }),
    );
  } catch (error) {
    console.error('Error al actualizar el stock:', error.message);
  }
};

module.exports = productStockController;
