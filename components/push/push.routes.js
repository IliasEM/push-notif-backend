const express = require('express');

const handler = require('../../utilities/controllerHandler');

const pushController = require('./push.controller');

const router = express.Router();

router.post('/', handler(pushController.sendPushNotification, (req) => {
    const payload = {
        title: req.body.title,
        message: req.body.message,
        url: req.body.url,
        ttl: req.body.ttl,
        icon: req.body.icon,
        image: req.body.image,
        badge: req.body.badge,
        tag: req.body.tag
    };

    return [payload]
}));


module.exports = router;