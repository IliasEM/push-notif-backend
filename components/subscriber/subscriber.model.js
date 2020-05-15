const mongoose = require('mongoose');

const { clientConnection } = require('../../database/connections');


const SubscriberSchema = new mongoose.Schema({
   endpoint: String,
   p256dh: String,
   auth: String,
   createDate: {
       type: Date,
       default: Date.now
   }
});

const Subscriber = clientConnection.model('Subscriber', SubscriberSchema);

module.exports = Subscriber;
