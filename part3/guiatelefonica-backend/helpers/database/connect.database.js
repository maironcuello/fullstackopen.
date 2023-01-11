const mongoose = require('mongoose');
const { User } = require('../../models/phonebook.model');
require('dotenv').config();


const dbConection = async () => {
    try {
        await mongoose.connect(process.env.MONGO_CNN, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });

        console.log(`Database connection is established. status: ${process.env.NAME} is online`);

    } catch (error) {
        throw new Error(`Database connection not established. status: ${process.env.NAME} is offline`);
    }
}

module.exports = {
    dbConection
}