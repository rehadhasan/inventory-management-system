const mongoose = require('mongoose');

const DataSchema = mongoose.Schema({
    userEmail: {type: String, required: true},
    SuppliersName: {type: String, required: true},
    Phone: {type: String, required: true},
    Email: {type: String, required: true, unique: true},
    Address: {type: String, required: true}
},{
    timestamps: true,
    versionKey: false
})

const SuppliersModel = mongoose.model('suppliers', DataSchema);

module.exports = SuppliersModel;