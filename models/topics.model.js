const mongoose = require('mongoose');

const topicSchema = new mongoose.Schema({
    topic: { type: String, required: true, trim: true },
    description: { type: String, required: true, trim: true },
    students: { type: mongoose.Schema.Types.ObjectId, required: true, trim: true, ref: "Student"},
    proposal: { type: String, required: true, trim: true },
    isApproved: { type: Boolean, required: true, trim: true, default: false }
});

const Topic = mongoose.model('Topic', topicSchema);

module.exports = Topic;
