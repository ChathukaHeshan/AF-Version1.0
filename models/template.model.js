const mongoose = require('mongoose');

const templateSchema = new mongoose.Schema({
    topic: { type: String, required: true, trim: true },
    description: { type: String, required: true, trim: true },
    link: { type: String, required: true, trim: true },
    author: { type: mongoose.Schema.Types.ObjectId, required: true, trim: true, ref: 'Admin' },
    isApproved: { type: Boolean, required: true, default: false },
    isPaid: { type: Boolean, required: true, default: false }
})

const Template = mongoose.model('Template', templateSchema);

module.exports = Template;