const express = require('express');
const Attendance = require('../models/Attendance');
const router = express.Router();

// Mark Attendance
router.post('/mark', async (req, res) => {
    const { studentId, status } = req.body;
    try {
        const attendance = new Attendance({ studentId, status });
        await attendance.save();
        res.status(201).send('Attendance marked successfuly');
    } catch (err) {
        res.status(400).send(err.message);
    }
});

// Get Attendance
router.get('/student/:id', async (req, res) => {
    try {
        const attendance = await Attendance.find({ studentId: req.params.id });
        res.json(attendance);
    } catch (err) {
        res.status(500).send(err.message);
    }
});

module.exports = router;
