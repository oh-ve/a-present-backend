const mongoose = require("mongoose");

const { Schema } = mongoose;

const StudentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  formerJob: {
    type: String,
    required: false,
  },
  goal: {
    type: String,
    required: false,
  },
  learning: {
    type: String,
    required: false,
  },
  struggle: {
    type: String,
    required: false,
  },
  moment: {
    type: String,
    required: false,
  },

  whyReaganIsCool: {
    type: String,
    required: false,
  },
  message: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Students", StudentSchema);
