const pushService = require('./push.service');

const sendPushNotification = (payload) => {
    return pushService.sendPushNotification(payload);
}

module.exports = {
    sendPushNotification,
};