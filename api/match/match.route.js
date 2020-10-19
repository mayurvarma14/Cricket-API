const express = require('express');

const controller = require('./match.controller');

const router = express.Router();

router.get('/', controller.find);
router.get('/won-or-lost/:id', controller.wonOrLost);

module.exports = router;
