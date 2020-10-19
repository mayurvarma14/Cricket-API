const express = require('express');

const controller = require('./team.controller');

const router = express.Router();

router.get('/', controller.find);

module.exports = router;
