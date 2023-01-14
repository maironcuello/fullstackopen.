require('dotenv').config();


PORT = process.env.PORT || 3003;
MONGO_CNN = process.env.MOBGO_CNN;
NAME = process.env.NAME;
PATHBlOGS = '/api/blogs';
NAME_APP='Blogs';

module.exports = {
    PORT,
    MONGO_CNN,
    NAME,
    PATHBlOGS,
    NAME_APP
};