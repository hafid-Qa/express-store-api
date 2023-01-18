import Product from "../models/product.js";

const getAllProducts = async (req, res) => {
  throw new Error(`Cannot get all products`);

  res.status(200).json({ msg: "all products " });
};
const getAllProductsStatic = async (req, res) => {
  const products = await Product.find({
    featured: true,
  });
  res.status(200).json({ products, nbHits: products.length });
};

export { getAllProducts, getAllProductsStatic };
