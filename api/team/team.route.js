const express = require('express');

const controller = require('./team.controller');

const router = express.Router();

router.get('/', controller.find);
router.get('/leaderboard', controller.leaderboard);

module.exports = router;
