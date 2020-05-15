const signale = require('signale');
const config = require('config');

const app = require('./app');

const configPort = config.get('Application.port');

let server;

server = app.listen(configPort, () => {
    signale.start(`Starting at ${(new Date()).toString()}`);
    signale.start(`Server listening on port ${configPort}`);
});