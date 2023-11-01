import mongoose from "mongoose";
const { Schema } = mongoose;
const ProductSchema = new Schema(
  //TODO: validate data
  {
    category: {
      type: String,
      required: false,
    },
    name: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: false,
    },
    imageURL: {
      type: [],
      required: false,
    },
    stock: {
      type: Number,
      required: false,
    },
    long_desc: {
      type: String,
      required: false,
    },
    short_desc: {
      type: String,
      required: false,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Product", ProductSchema);
