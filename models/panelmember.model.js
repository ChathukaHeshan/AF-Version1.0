
const mongoose = require("mongoose");

const PanelmemberSchema = new mongoose.Schema({
    title: { type: String, required: true, trim: true },
    name: { type: String, required: true, trim: true },
    username: { type: String, required: true, trim: true, unique: true },
    password: { type: String, required: true,trim: true },
    email: { type: String, required: true, unique: true },
    contactNumber: { type: String, required: true, trim: true },
    isPaid: { type: Boolean, required: true, default: false },
    isPanelmember: { type: Boolean, required:true, default: false}
});

const Panelmember = mongoose.model("panelmembers", PanelmemberSchema);

module.exports = Panelmember;
