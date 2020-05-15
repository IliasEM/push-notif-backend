const subscribeService = require('./subscriber.service');

const getSubscribers = () => {
    return subscribeService.getSubscribers();
}

const subscribe = (subscription) => {
    return subscribeService.subscribe(subscription);
}
module.exports = {
    getSubscribers,
    subscribe,
};