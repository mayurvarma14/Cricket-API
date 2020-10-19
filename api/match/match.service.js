const Match = require('./match.model');

module.exports = {
  async find(data) {
    return Match.find(data);
  },
  async getTeamById(data) {
    return Match.find(data).populate('teams.team');
  },
  async wonOrLost(id) {
    const matches = await this.getTeamById({ 'teams.team': id });
    return matches.map((match) => {
      const [team1, team2] = match.teams;
      let current;
      let opposite;
      // eslint-disable-next-line eqeqeq
      if (team1.team._id == id) {
        current = team1;
        opposite = team2;
      } else {
        current = team2;
        opposite = team1;
      }
      let color;
      if (current.score === opposite.score) color = 'white';
      else if (current.score > opposite.score) color = 'green';
      else {
        color = 'Red';
      }

      return { color, current, opposite };
    });
  },
};
