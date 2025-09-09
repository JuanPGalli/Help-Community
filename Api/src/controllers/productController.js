const { Product, CategoryProduct } = require('../db');
const {
  cleanArrayProductDB,
  cleanArrayProductApi,
  getCategoryProductId,
} = require('../../helpers/productHelper');
const products = require('../../dataApi/products');

const getAllProducts = async function () {
  // obtenés todos los productos existentes
  const prodDB = await Product.findAll();
  // sólo seed si la DB está vacía
  if (prodDB.length === 0) {
    await Promise.all(
      products.map(async (product) => {
        const categoryProductId = await getCategoryProductId(product.category);
        console.log('categoryProductId for', product.title, '->', categoryProductId);
        // findOrCreate evita duplicados por el 'where'
        await Product.findOrCreate({
          where: {
            name: product.title, // campo único
          },
          defaults: {
            price: product.price,
            description: product.description,
            image: product.thumbnail,
            brand: product.brand,
            stock: product.stock,
            rating: product.rating,
            state: true,
            CategoryProductId: categoryProductId,
          },
        });
      }),
    );
  }
  //trae todos los productos
  const rawArrayDB = await CategoryProduct.findAll({
    include: [
      {
        model: Product,
        attributes: [
          'id',
          'name',
          'price',
          'description',
          'image',
          'brand',
          'stock',
          'rating',
          'state',
        ],
      },
    ],
  });

  return cleanArrayProductDB(rawArrayDB);
};

const getProductByName = async function (name) {
  if (name) {
    //Insensitve Case
    const rawArrayDB = await CategoryProduct.findAll({
      include: [
        {
          model: Product,
          attributes: [
            'id',
            'name',
            'price',
            'description',
            'image',
            'brand',
            'stock',
            'rating',
            'state',
          ],
        },
      ],
    });

    const productDB = [];

    rawArrayDB.forEach((category) => {
      category.Products.forEach((product) => {
        if (product.name.toLowerCase().includes(name.toLowerCase())) {
          productDB.push({
            ...product.dataValues,
            category: category.name,
            created: true,
          });
        }
      });
    });

    const productApi = cleanArrayProductApi(products);
    const filteredApi = productApi.filter((product) => {
      return product.name.toLowerCase().includes(name.toLowerCase()); // Busqueda inexacta
    });
    if (filteredApi.length > 0 || productDB.length > 0) return [...filteredApi, ...productDB];
    else throw new Error('Product name not found');
  }
};

const postProduct = async (
  name,
  description,
  image,
  price,
  brand,
  stock,
  rating,
  state,
  CategoryProductId,
) => {
  const newProduct = await Product.create({
    name,
    description,
    image,
    price,
    brand,
    stock,
    rating,
    state,
    CategoryProductId,
  });

  return newProduct;
};

const putProduct = async (
  id,
  name,
  description,
  image,
  price,
  brand,
  stock,
  rating,
  state,
  CategoryProductId,
) => {
  await Product.update(
    {
      name,
      description,
      image,
      price,
      brand,
      stock,
      rating,
      state,
      CategoryProductId,
    },
    {
      where: {
        id,
      },
    },
  );
};

module.exports = {
  getAllProducts,
  postProduct,
  getProductByName,
  putProduct,
};
