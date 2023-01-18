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

// middleware
app.use(express.json());

// routes
// app.use(productsRouter);
app.get("/", (req, res) => {
  res.send(`<h1>Store API</h1> <a href="/api/v1/products">Products</a>`);
});

// products route
app.get("/api/v1/products", (req, res) => {
  res.send(`<h1>Products</h1> <a href="/">Back</a>`);
});

app.use(notFound);
app.use(errorHandler);

const start = async () => {
  try {
    await connectDB(connectionString);
    app.listen(PORT, console.log(`Listening on port ${PORT}...`));
  } catch (error) {
    console.log(error);
  }
};

start();
