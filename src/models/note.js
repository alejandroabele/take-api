const mongoose = require("mongoose");

const noteSchema = mongoose.Schema(
  {
    data: {
      type: String,
      required: true,
    },
    member: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "member",
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("note", noteSchema);
