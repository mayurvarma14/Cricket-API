const mongoose = require('mongoose');

const { Schema } = mongoose;

const teamSchema = new Schema(
  {
    name: { type: String, required: true, unique: true },
    image: { type: String, unique: true },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Team', teamSchema);
