const signale = require('signale');
const config = require('config');

const configPort = config.get('Application.port');

const app = require('./app');


app.listen(configPort, () => {
    console.log('Started server', configPort)
});