const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
    title: { type: String, required: true, trim: true },
    name: { type: String, required: true, trim: true },
    username: { type: String, required: true, trim: true, unique: true },
    password: { type: String, required: true,trim: true },
    email: { type: String, required: true, unique: true },
    contactNumber: { type: String, required: true, trim: true },
    university: { type: String, required: true, trim: true },
    department: { type: String, required: true, trim: true },
    isStudent: { type: Boolean, required:true, default: false}
})

const Student = mongoose.model('Student', studentSchema);

module.exports = Student;
