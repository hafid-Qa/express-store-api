import Product from "../models/product.js";

const getAllProducts = async (req, res) => {
  const products = await Product.find(req.query);
  res.status(200).json({
    numberOfProducts: products.length,
    products,
  });
};
const getAllProductsStatic = async (req, res) => {
  const products = await Product.find({});
  res.status(200).json({ numberOfProducts: products.length, products });
};

export { getAllProducts, getAllProductsStatic };
