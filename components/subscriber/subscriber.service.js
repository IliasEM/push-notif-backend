const Subscription = require('./subscriber.model')


const getSubscribers = async () => {
    const subscribers = await Subscription.find({});
    return subscribers;
}

const subscribe = async (subscription) => {
    const subscriptionModel = await new Subscription({
        endpoint: subscription.endpoint,
        p256dh: subscription.keys.p256dh,
        auth: subscription.keys.auth,
    }).save();

    return subscriptionModel;
}

module.exports = {
    getSubscribers,
    subscribe,
}
