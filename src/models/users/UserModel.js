const mongoose = require('mongoose');

const DataSchema = mongoose.Schema({
    email: {type: String, required: true, unique: true},
    firstName: {type: String, required: true},
    lastName: {type: String, required: true},
    phone: {type: String, required: true},
    password: {type: String, required: true},
    photo: {type: String, required: false, default: ""}
},{
    timestamps: true,
    versionKey: false
})

const UserModel = mongoose.model('users', DataSchema);

module.exports = UserModel;