const connect = require('./configs/db');
const express = require('express');
const app = express();
app.use(express.json());

const start = async () => {
    await connect();
    app.listen(3001, () => {
        console.log('LISTENING ON PORT 3001');
    });
};

module.exports = {
    app,
    start,
};
