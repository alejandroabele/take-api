const mongoose = require("mongoose");
const mongoose_fuzzy_searching = require("mongoose-fuzzy-searching-v3");

const clientSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    state: {
      type: String,
      required: true,
    },
    zip: {
      type: Number,
      required: true,
    },
    headCount: {
      type: Number,
      required: false,
    },
    status: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);
clientSchema.plugin(mongoose_fuzzy_searching, {
  fields: ["name"],
});

module.exports = mongoose.model("client", clientSchema);
