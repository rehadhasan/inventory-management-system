const mongoose = require('mongoose');

const DataSchema = mongoose.Schema({
    email: {type: String, required: true},
    otp: {type: String, required: true},
    status: {type: String, required: true}
},{
    timestamps: true,
    versionKey: false
})

const OTPModel = mongoose.model('OTP', DataSchema);

module.exports = OTPModel;