const mongoose = require('mongoose');
const config = require('config');

const clientUri = config.get('Application.database.client');

const databaseOptions = config.get('Application.databaseOptions');

module.exports = {
  clientConnection: mongoose.createConnection(clientUri, databaseOptions),
};
