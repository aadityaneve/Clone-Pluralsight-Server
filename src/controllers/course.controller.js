const express = require('express');
const router = express.Router();
const Course = require('../models/course.model');

router.get('/courses', async (req, res) => {
    try {
        const course = await Course.find().lean().exec();

        return res.status(200).json({ status: 'Success', course: course });
    } catch (e) {
        return res.status(500).json({ status: 'Failed', message: e.message });
    }
});

module.exports = router;
