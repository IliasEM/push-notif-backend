const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors')

require('./model/subscribers_model');


const index = require('./router');
const push = require('./router/push');
const subscribe = require('./router/subscribe');

const keys = require('./config/keys');

mongoose.Promise = global.Promise;

mongoose.connect(keys.mongoURI)
.then(() => console.log('MongoDB Connected'))
.catch(err => console.log(err));

const app = express();

app.use(cors())

app.set('trust proxy', true);
// parse application/json
app.use(bodyParser.json());
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use('/', index);
app.use('/subscribe', subscribe);
app.use('/push', push);


const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});

