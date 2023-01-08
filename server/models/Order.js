const { Schema, model } = require("mongoose");
const dateFormat = require("../utils/dateFormat");

const orderSchema = new Schema({
  user_email: {
    type: String,
    required: true,
    // ref: "User",
  },
  date: {
    type: String,
  },
  shipTo: {
    type: String,
  },
  paymentMethod: {
    type: String,
  },
  amount: {
    type: Number,
  },
});

const Order = model("Order", orderSchema);

module.exports = Order;
