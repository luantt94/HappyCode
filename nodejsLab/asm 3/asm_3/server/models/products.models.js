import mongoose from "mongoose";
const { Schema } = mongoose;
const ProductSchema = new Schema(
  {
    category: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    imageURL: {
      type: [],
      required: true,
    },
    stock: {
      type: Number,
      required: true,
    },
    long_desc: {
      type: String,
      required: true,
    },
    short_desc: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Product", ProductSchema);
