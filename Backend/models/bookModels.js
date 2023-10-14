const mongoose = require("mongoose");

const bookModels = mongoose.Schema(
    {
        title: {
          type: String,
          required: true,
        },
        author: {
          type: String,
          required: true,
        },
        publishYear: {
          type: Number,
          required: true,
        },
      },
      {
        timestamps: true,
      }
  
);

module.exports = mongoose.model('Books', bookModels);