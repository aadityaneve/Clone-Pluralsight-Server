const mongoose = require('mongoose');
require('dotenv').config();

const connect = () => {
    mongoose.connect(
        `mongodb+srv://aadityaneve:aadityaneve12$@cluster0.aiizm.mongodb.net/Pluralsight`
    );
};
// `mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_KEY}@cluster0.aiizm.mongodb.net/Pluralsight`

module.exports = connect;
