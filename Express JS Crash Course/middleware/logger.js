const moment = require("moment");

// Simple middleware function
const logger = (req, res, next) => {
    // The whole URL that is hit
    console.log(`${req.protocol}://${req.get('host')}${req.originalUrl}: ${moment().format()}`);

    next();
};

module.exports = logger;