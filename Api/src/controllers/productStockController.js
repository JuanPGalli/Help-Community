const { Product } = require('../db');

const productStockController = async (items) => {
  console.log('Entrando a productStockController con items:', items); // 👈 log al entrar

  try {
    await Promise.all(
      items.map(async (item) => {
        // busca el producto
        const prod = await Product.findByPk(item.id, { attributes: ['stock'] });

        if (!prod) {
          console.error(`Producto con id ${item.id} no encontrado`);
          return;
        }

        const finalStock = (prod?.stock ?? 0) - Number(item.quantity || 1);

        // no permitir stock negativo
        const newStock = finalStock < 0 ? 0 : finalStock;

        console.log(
          `Producto ${item.id} stock actual: ${prod.stock}, cantidad: ${item.quantity}, stock final: ${newStock}`,
        );

        await Product.update({ stock: newStock }, { where: { id: item.id } });
      }),
    );
    console.log('Stock actualizado para todos los items.');
  } catch (error) {
    console.error('Error al actualizar el stock:', error);
  }
};

module.exports = productStockController;
