const getAllProducts = async (req, res) => {
  res.status(200).json({ msg: "all products " });
};
const getAllProductsStatic = async (req, res) => {
  res.status(200).json({ msg: "all products Static" });
};

export { getAllProducts, getAllProductsStatic };
