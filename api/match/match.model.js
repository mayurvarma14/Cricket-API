const mongoose = require('mongoose');

const { Schema } = mongoose;

const matchSchema = new Schema(
  {
    teams: [
      {
        team: { type: Schema.Types.ObjectId, ref: 'Team', required: true },
        score: { type: Number, required: true },
      },
    ],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Match', matchSchema);
