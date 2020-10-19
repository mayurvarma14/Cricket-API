const express = require('express');

const controller = require('./match.controller');

const router = express.Router();

router.get('/', controller.find);

module.exports = router;
