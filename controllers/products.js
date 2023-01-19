import Product from "../models/product.js";

const getAllProducts = async (req, res) => {
  const { featured, name, company, sort, fields } = req.query;
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
  let result = Product.find(queryObject);
  if (sort) {
    const sortList = sort.split(",").join(" ");
    console.log(sortList);
    result = result.sort(sortList);
  } else {
    result = result.sort("created_at");
  }
  if (fields) {
    const fieldsList = fields.split(",").join(" ");
    console.log(fieldsList);
    result = result.select(fieldsList);
  }
  const page = Number(req.query.page) || 1;
  const limit = Number(req.query.limit) || 10;
  const skip = (page - 1) * limit;

  result = result.skip(skip).limit(limit);
  
  const products = await result;
  res.status(200).json({
    numberOfProducts: products.length,
    products,
  });
};
const getAllProductsStatic = async (req, res) => {
  const products = await Product.find({}).sort("-name");
  res.status(200).json({ numberOfProducts: products.length, products });
};

export { getAllProducts, getAllProductsStatic };
