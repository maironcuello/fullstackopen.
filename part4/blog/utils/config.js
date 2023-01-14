require('dotenv').config();


PORT = process.env.PORT || 3003;
MONGO_CNN = process.env.MONGO_CNN;
NAME = 'BLOGS';
PATHBlOGS = '/api/blogs';
NAME_APP='Blogs';

module.exports = {
    PORT,
    MONGO_CNN,
    NAME,
    PATHBlOGS,
    NAME_APP
};