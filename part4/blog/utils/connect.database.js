const mongoose = require('mongoose');
const config = require('./config');
const logger = require('./logger');

/**
 * This is to suppress warnings
 */
mongoose.set('strictQuery', true);



/**
 * Method to connecting server to database
 */
const mongoConnection = async () => {

    await mongoose.connect(config.MONGO_CNN)
        .then((connection) => {
            logger.info(`Connecting to mongoo database ${config.NAME} status : Online`);
        })
        .catch((error) => {
            logger.error(`Connecting to mongoo database ${config.NAME} status : Ofline`);
        });
}

module.exports = mongoConnection;