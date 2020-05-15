const express = require('express');

const handler = require('../../utilities/controllerHandler');

const defaultController = require('./default.controller');

const router = express.Router();

router.get('/', handler(defaultController.defaultMethod));

module.exports = router;