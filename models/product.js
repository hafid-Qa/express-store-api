import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Product name is required"],
  },
  price: {
    type: Number,
    required: [true, "Product price is required"],
  },
  featured: {
    type: Boolean,
    default: false,
  },
  company: {
    type: String,
    enum: {
      values: ["EK", "EY", "QR", "AT"],
      message: "{VALUE} is not a valid company name",
    },
    // enum: ["EK", "EY", "QR", "AT"],
  },
  rating: {
    type: Number,
    default: 4.5,
  },
  created_at: {
    type: Date,
    default: Date.now(),
  },
});

export default mongoose.model("Product", productSchema);
