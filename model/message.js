const mongoose = require("mongoose");

const messageSchema = new mongoose.Schema({
  response_id: {
    type: String,
  },

  response: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Message", messageSchema);
