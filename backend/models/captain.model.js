const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


const captainschema = new mongoose.Schema({
    fullname: {
        firstname: {
            type: String,
            required: true,
            minlength: [ 3, 'First name must be at least 3 characters long' ],
        },
        lastname: {
            type: String,
            minlength: [ 3, 'Last name must be at least 3 characters long' ],
        }
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        minlength: [ 5, 'Email must be at least 5 characters long' ],
    },
    password: {
        type: String,
        required: true,
        select: false,
    },
    socketId: {
        type: String,
    },
    status:{
        type: String,
        enum: ['active','inactive'],
        default: 'inactive'    
    },
   
        color:{
            type: String,
            required: true,
            minlength: [ 3, 'Color must be at least 3 characters long' ],   
        },
        plate :{
            type: String,
            required: true,
            minlength: [ 3, 'Plate must be at least 3 characters long' ],   
        },
        capacity:{
            type: Number,
            required: true,
            min: [ 1, 'Capacity must be at least 1' ],
        },
        vehicleType:{
            type: String,
            enum: ['car','motorcycle','auto'],
            default: 'car'    
        }   ,


   
    location:{
       lat:{
           type: Number,
       },
       lng:{
           type: Number,
       }   
    },
})
captainschema.methods.generateAuthToken = function () {
    const token = jwt.sign({ _id: this._id }, process.env.JWT_SECRET, { expiresIn: '24h' });
    return token;
}   
captainschema.methods.comparePassword = async function (password) {
    return await bcrypt.compare(password, this.password);
}
captainschema.statics.hashPassword = async function (password) {
    return await bcrypt.hash(password, 10);
}   

const captainModel = mongoose.model('captain', captainschema)
module.exports = captainModel;