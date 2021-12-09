const mongoose = require("mongoose");

const admSchema = new mongoose.Schema(
  {
    id: mongoose.Schema.Types.ObjectId,

    username: {
      type: String,
      required: true,
    },

    email: {
      type: String,
      required: true,
    },

    password: {
      type: String,
      required: true,
    },

  }, { timestamps: true }
);

module.exports = mongoose.model("adm", admSchema);