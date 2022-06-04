const mongoose = require('mongoose');

const requestsupervisorSchema = new mongoose.Schema({
    topic: { type: String, required: true, trim: true },
    description: { type: String, required: true, trim: true },
    presenters: { type: mongoose.Schema.Types.ObjectId, required: true, trim: true, ref: "Student"},
    proposal: { type: String, required: true, trim: true },
    isApproved: { type: Boolean, required: true, trim: true, default: false }
});

const Requestsupervisor = mongoose.model('Requestsupervisor', requestsupervisorSchema);

module.exports =  Requestsupervisor;