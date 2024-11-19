const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
    student_id: { type: String, required: true },  // Keep as String or change to Number if necessary
    name: { type: String, required: true },
    batch: { type: String, required: true },
    email: { type: String, required: true },
    enrollment_year: { type: Number, required: true },
    phone: { type: String, required: true },
    classes: { type: [String], required: true }
});

// Export the model
module.exports = mongoose.model('Student', studentSchema);
