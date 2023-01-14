const mongoose = require('mongoose');
const { User } = require('../../models/phonebook.model');
require('dotenv').config();
const logger = require('.././utils/logger')

mongoose.set("strictQuery", false);
const dbConection = async () => {

    await mongoose.connect(process.env.MONGO_CNN, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
        .then(() => {
            logger.info(`Database connection ${process.env.NAME} is established. status : Online`);
        }).catch((err) => {
            throw new Error(`Database connection ${process.env.NAME} not established. status:  Offline`);
        })
}

module.exports = {
    dbConection
}