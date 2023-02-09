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


    try {

        console.log('State :', process.env.NODE_ENV)
        if (process.env.NODE_ENV === 'test') {
            MONGO_CNN = process.env.TEST_MONGO_CNN
        }
        await mongoose.connect(MONGO_CNN);
        logger.info(`Connecting to mongoo database ${config.NAME} status : Online`);

    } catch (error) {
        logger.error(`Connecting to mongoo database ${config.NAME} status : Ofline`);
    }

}

module.exports = mongoConnection;