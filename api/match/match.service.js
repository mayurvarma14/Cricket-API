const Match = require('./match.model');

module.exports = {
  async find(data) {
    return Match.find(data);
  },
};
