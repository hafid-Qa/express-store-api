import Product from "../models/product.js";

const getAllProducts = async (req, res) => {
  const { featured, rating, name, price, company } = req.query;
  const queryObject = {};
  if (featured) {
    queryObject.featured = featured === "true" ? true : false;
  }
  if (company) {
    queryObject.company = company.toUpperCase();
  }
  if (name) {
    queryObject.name = { $regex: name, $options: "i" };
  }
  console.log(queryObject);
  const products = await Product.find(queryObject);
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
