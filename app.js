import express from "express";
const app = express();
import * as dotenv from "dotenv";
dotenv.config();
import connectDB from "./db/connect.js";
import notFound from "./middleware/not-found.js";
import errorHandler from "./middleware/error-handler.js";
import productsRouter from "./routes/products.js";

const PORT = process.env.PORT || 3000;
const connectionString = process.env.MONGO_DB_CONNECTION;
console.log(connectionString);

const start = async () => {
  try {
    await connectDB(connectionString);
    app.listen(PORT, console.log(`Listening on port ${PORT}...`));
  } catch (error) {
    console.log(error);
  }
};

start();
