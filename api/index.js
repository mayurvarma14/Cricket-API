const express = require('express');

const matchRoutes = require('./match/match.route');
const teamRoutes = require('./team/team.route');

const router = express.Router();

router.use('/teams', teamRoutes);
router.use('/matches', matchRoutes);

module.exports = { routes: router };
