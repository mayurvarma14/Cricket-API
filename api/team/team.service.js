const Team = require('./team.model');

module.exports = {
  async find(data) {
    return Team.find(data);
  },
};
