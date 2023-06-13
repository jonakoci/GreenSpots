const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    lat: { type: Number } ,
    lng: { type: Number } ,
    available: {
        type: Boolean,
        default: 'true'
    }
},
 { timestamps: true });
 module.exports = mongoose.model('User', UserSchema);


