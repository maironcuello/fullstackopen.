require('dotenv').config();
const logger = require('./logger');


PORT = process.env.PORT || 3003;
MONGO_CNN = process.env.MONGO_CNN;
NAME = 'BLOGS';
PATHUSERS = '/api/users';
PATHBlOGS = '/api/blogs';
NAME_APP='Blogs';


logger.info(MONGO_CNN);
logger.info(process.env.NODE_ENV);

if (process.env.NODE_ENV === 'test') {
    MONGO_CNN = process.env.TEST_MONGO_CNN
}

module.exports = {
    PORT,
    MONGO_CNN,
    NAME,
    PATHBlOGS,
    NAME_APP
};