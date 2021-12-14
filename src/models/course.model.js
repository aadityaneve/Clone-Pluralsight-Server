const mongoose = require('mongoose');

const courseSchema = mongoose.Schema(
    {
        title: { type: String, required: true },
        name: { type: String, required: true },
        by: { type: String, required: true },
        rating: { type: Number, required: true },
        level: { type: String, required: true },
        time: { type: String, required: true },
        shortDiscription: { type: String, required: true },
        discription: { type: String, required: true },
        Author_Image_URL: { type: String, required: true },
        author_about: { type: String, required: true },
        date: { type: String, required: true },
    },
    {
        versionkey: false,
        timestamp: true,
    }
);
const Course = mongoose.model('course', courseSchema);

module.exports = Course;
