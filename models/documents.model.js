const mongoose = require('mongoose');

const documentSchema = new mongoose.Schema({
    topic: { type: String, required: true, trim: true },
    description: { type: String, required: true, trim: true },
    presenters: { type: mongoose.Schema.Types.ObjectId, required: true, trim: true, ref: "Student"},
    proposal: { type: String, required: true, trim: true },
    isApproved: { type: Boolean, required: true, trim: true, default: false }
});

const Document = mongoose.model('Document', documentSchema);

module.exports = Document;