const { app, start } = require('./server');

const courseController = require('./controllers/course.controller');

console.clear();

app.use('/', courseController);

start();
