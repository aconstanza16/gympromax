// models/User.js
const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    nombre: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    pagos: [{
        monto: Number,
        fecha: { type: Date, default: Date.now },
    }],
});

module.exports = mongoose.model('User', UserSchema);


            
