const mongoose = require("mongoose");

const memberSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: Number,
      required: true,
    },
    email: {
      type: String,
      required: false,
    },
    client: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "client",
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("member", memberSchema);
