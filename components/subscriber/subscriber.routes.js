const express = require('express');

const handler = require('../../utilities/controllerHandler');

const subscriberController = require('./subscriber.controller');

const router = express.Router();

router.get('/', handler(subscriberController.getSubscribers));

router.post('/', handler(subscriberController.subscribe, (req) => {
    console.log(req.body);
    return [req.body]
}));

module.exports = router;