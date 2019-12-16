const Logger = require('./logger');

// Instantiating the class
const logger = new Logger();

logger.on("message", (data) => {
    console.log("Called Listener: ", data);
})

logger.log("Hello world!");