const Team = require('./team.model');
const matchService = require('../match/match.service');

module.exports = {
  async find(data) {
    return Team.find(data);
  },
  async getTeamsLeaderboard() {
    const teams = await this.find();
    const promises = teams.map(async (team) => {
      let M = 0;
      let L = 0;
      let P = 0;
      let D = 0;
      let W = 0;

      const matches = await matchService.wonOrLost(team.id);
      M = matches.length;
      matches.forEach((match) => {
        if (match.result === 'won') W++;
        if (match.result === 'lost') L++;
        if (match.result === 'draw') D++;
      });
      P = W * 2 + D;
      return {
        team,
        M,
        L,
        P,
        D,
        W,
      };
    });
    return Promise.all(promises);
  },
};
