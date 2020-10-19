/* eslint-disable no-underscore-dangle */
require('dotenv').config();
const teamData = require('./team.json');
const matchData = require('./match.json');
const database = require('../config/database');
const Match = require('../api/match/match.model');
const Team = require('../api/team/team.model');

async function seedTeam() {
  const promises = teamData.Teams.map(async (team) => Team.create({ name: team.name, image: team.image }));
  await Promise.all(promises);
}

async function seedMatch() {
  const promises = matchData.Matches.map(async (match) => {
    const teamsPromise = match.Teams.map(async (team) => {
      const data = await Team.findOne({ name: team.name });
      return { team: data._id, score: team.score };
    });
    return Match.create({ teams: await Promise.all(teamsPromise) });
  });
  await Promise.all(promises);
}

(async () => {
  try {
    const mongoose = await database.connect();
    console.log('Remove existing data...');
    await mongoose.connection.db.dropDatabase();
    console.log('Done removing existing data');
    await seedTeam();
    console.log('Created Teams');
    await seedMatch();
    console.log('Created Matches');
    console.log('Done seeding database');
    process.exit(0);
  } catch (error) {
    console.error(error);
  }
})();
