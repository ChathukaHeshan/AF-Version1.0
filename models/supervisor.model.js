const mongoose = require('mongoose');

const supervisorSchema = new mongoose.Schema({
    title: { type: String, required: true, trim: true },
    name: { type: String, required: true, trim: true },
    username: { type: String, required: true, trim: true },
    password: { type: String, required: true,trim: true },
    email: { type: String, required: true, unique: true },
    contactNumber: { type: String, required: true, trim: true },
    university: { type: String, required: true, trim: true },
    department: { type: String, required: true, trim: true },
    isSupervisor: { type: Boolean, required:true, default: false}
})

const Supervisor = mongoose.model('Supervisor', supervisorSchema);

module.exports = Supervisor;
