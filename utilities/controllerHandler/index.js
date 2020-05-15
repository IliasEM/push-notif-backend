/* eslint-disable */
const signale = require('signale');

/**
 * Handles controller execution and responds to user (API Express version).
 *
 * @param {Promise} promise Controller Promise. I.e. getUser.
 * @param {Function} params A function (req, res, next), all of which are optional
 * that maps our desired controller parameters. I.e. (req) => [req.params.username, ...].
 *
 * @return {Promise} A Promise, an exception or a value.
 */
const controllerHandler = (promise, params, activity, pdf) => async (req, res, next) => {
  const boundParams = params ? params(req, res, next) : [];

  try {
    const result = await promise(...boundParams);

    if (pdf) {
      res.type('pdf');
      return res.send(result);
    }

    return res.json(result || { message: 'OK' });
  } catch (error) {
    if (error.name === 'ClientError') {
      return res.status(500).send({ message: error.message });
    }

    signale.fatal(error);
    return res.status(500).send({ message: 'Something went wrong, please try again later' });
  }
};

module.exports = controllerHandler;
