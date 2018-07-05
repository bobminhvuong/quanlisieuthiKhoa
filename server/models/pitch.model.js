var mongoose = require('mongoose');

var pitchSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    email: {
        type: String
    },
    phone:{
        type: String,
        required: true
    },
    img: [{
        urlImg:{
            type: String
        }
    }],
    type: {
        type: String
    },
    numberOfBitch:{
        type: String,
        required: true
    },
    Price: {
        type: String,
        required: true
    },
    sellPrice:{
        type: String
    },
    lag: {
        type: Number
    },
    long:{
        type: Number
    },
    location:{
        type: String,
        required: true
    },
    rate: {
        type: Number
    },
    spam: {
        type: Number
    }
});
var Pitch = mongoose.model(pitchSchema);
module.exports= Pitch;