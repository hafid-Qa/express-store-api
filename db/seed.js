import * as dotenv from "dotenv";
dotenv.config();
import Product from "../models/product.js";
import connectDB from "./connect.js";
import jsonProducts from "./products.json" assert { type: "json" };
const connectionString = process.env.MONGO_URI;

const start = async () => {
  try {
    await connectDB(connectionString);
    console.log("connected to DB");
    console.log("clearing DB...");
    await Product.deleteMany({});
    console.log("creating new product...");
    await Product.create(jsonProducts);
    console.log(`${jsonProducts.length} products created`);
  } catch (error) {
    console.log(error);
  }
};

start();
