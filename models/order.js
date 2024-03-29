const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const orderSchema = new Schema(
  {
    items: [
      {
        item: { type: Object, required: true },
        quantity: { type: Number, required: true },
      },
    ],
    status: {
      type: String,
      required: true,
      enum: [
        "Placed",
        "Cancelled",
        "Accepted",
        "Completed",
        "Out For Delivery",
        "Rated"
      ],
    },
    user: {
      email: {
        type: String,
        required: true,
      },
      address: {
        type: Object,
        required: true,
      },
      name: {
        type: String,
        required: true,
      },
      userId: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: "User",
      },
      phoneNo: String,
    },
    seller: {
      phone: {
        type: Number,
        required: true,
      },
      name: {
        type: String,
        required: true,
      },
      sellerId: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: "Seller",
      },
    },
    dateTime: Date,
    reservedFor: Number,
    orderType: String,
    rating: Number,
    review: String
  },
  { timestamps: true }
);

module.exports = mongoose.model("Order", orderSchema);
