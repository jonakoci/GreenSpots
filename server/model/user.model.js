const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    title: { 
        type: String,
        required: [true, "This field is required"],
     } ,
    description: { 
        type: String,
        required: [true, "This field is required"], } ,
    lat: { 
        type: Number,
        required: [true, "This field is required"],
     } ,
    lng: { 
        type: Number,
        required: [true, "This field is required"], } ,
    available: {
        type: Boolean,
        default: 'true'
    }
},
 { timestamps: true });
 module.exports = mongoose.model('User', UserSchema);


