
const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    membershipStart: { type: Date, required: true },
    membershipEnd: { type: Date, required: true }
});

module.exports = mongoose.model('User', UserSchema);
            