const mongoose = require('mongoose');

const AttendanceSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    date: { type: Date, default: Date.now },
    status: { type: String, enum: ['present', 'absent'], required: true },
    location: { type: { lat: Number, long: Number }, required: true },
    faceImage: { type: String, required: true }, // URL to the stored image
});

module.exports = mongoose.model('Attendance', AttendanceSchema);
