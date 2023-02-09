require('dotenv').config();


PORT = process.env.PORT || 3003;
MONGO_CNN = process.env.MONGO_CNN;
GENERATED_TOKEN = process.env.GENERATED_TOKEN;
NAME = 'BLOGS';
PATHLOGIN = '/api/login';
PATHUSERS = '/api/users';
PATHBlOGS = '/api/blogs';
PATHRESET = '/api/testing/reset';
NAME_APP='Blogs';
// if (process.env.NODE_ENV === 'test') {
//     MONGO_CNN = process.env.TEST_MONGO_CNN
// }

module.exports = {
    PORT,
    GENERATED_TOKEN,
    PATHLOGIN,
    PATHUSERS,
    MONGO_CNN,
    NAME,
    PATHBlOGS,
    PATHRESET,
    NAME_APP
};