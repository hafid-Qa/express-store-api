import * as dotenv from "dotenv";
dotenv.config();
import pkg from "lodash";
const { sample, times } = pkg;
import { faker } from "@faker-js/faker";
import Product from "../models/product.js";
import connectDB from "./connect.js";
import jsonProducts from "./products.json" assert { type: "json" };
const connectionString = process.env.MONGO_URI;
const start = async () => {
  try {
    await connectDB(connectionString);
    console.log("connected to DB, ready to seed");
    console.log("clearing the database...");
    await Product.deleteMany({});
    console.log("creating new product...");
    await Product.create(jsonProducts);
    console.log(`${jsonProducts.length} products created`);
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

// const companies = ["EK", "EY", "QR", "AT"];
// const start = async () => {
//   try {
//     await connectDB(connectionString);
//     console.log("connected to DB, ready to seed");
//     console.log("clearing the database...");
//     await Product.deleteMany();
//     console.log("creating new product...");
//     times(10, async () => {
//       const product = {
//         name: faker.commerce.productName(),
//         price: faker.commerce.price(50, 200, 0),
//         company: sample(companies),
//         rating: sample([1, 2, 3, 4, 5]),
//       };
//       await Product.create(product);
//     });
//     console.log(`products created successfully`);
//     process.exit(0);
//   } catch (error) {
//     console.log(error);
//     process.exit(1);
//   }
// };

start();
