const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const helmet = require('helmet');
const config = require('config');

const routes = require('./routes');

const session = require('express-session');
const MongoStore = require('connect-mongo')(session);

const environment = config.get('Application.environment');
const secret = config.get('Application.secret');
const clientDatabase = config.get('Application.database.client');
const corsWhitelist = config.get('Application.corsWhitelist');

const corsOptions = {
    origin: (origin, callback) => {
        if (corsWhitelist.indexOf(origin) !== -1 || !origin) callback(null, true);
        else callback(new Error('Not allowed by CORS'));
    },
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true,
};

const app = express();

app.use(cors(corsOptions));

app.use(helmet());

app.use(bodyParser.urlencoded({ limit: '40mb', extended: true }));
app.use(bodyParser.json({ limit: '40mb', extended: true }));

app.set('trust proxy', 1);
app.use(session({
    name: 'appconnect.sid',
    secret,
    resave: false,
    saveUninitialized: false,
    cookie: {
      domain: environment === 'development' ? null : '.taglayer.com',
      secure: environment !== 'development',
      httpOnly: true,
      maxAge: 14 * 24 * 60 * 60 * 1000, // 14 days in ms
    },
    store: new MongoStore({ url: clientDatabase, secret }),
}));

routes.forEach((route) => {
    app.use(route.path, route.router);
});

app.use((req, res) => {
  res.status(404).send(new Error('Endpoint doesn\'t exist'));
});

module.exports = app;