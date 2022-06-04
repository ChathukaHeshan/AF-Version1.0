const mongoose = require('mongoose');

const schemeSchema = new mongoose.Schema({
    topic: { type: String, required: true, trim: true },
    description: { type: String, required: true, trim: true },
    link: { type: String, required: true, trim: true },
    author: { type: mongoose.Schema.Types.ObjectId, required: true, trim: true, ref: 'Admin' },
    isApproved: { type: Boolean, required: true, default: false },
    isPaid: { type: Boolean, required: true, default: false }
})

const Scheme = mongoose.model('Scheme', schemeSchema);

module.exports = Scheme;