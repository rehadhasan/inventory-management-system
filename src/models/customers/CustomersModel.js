const mongoose = require('mongoose');

const DataSchema = mongoose.Schema({
    userEmail: {type: String, required: true},
    CustomerName: {type: String, required: true},
    Phone: {type: String, required: true},
    Email: {type: String, required: true},
    Address: {type: String, required: true}
},{
    timestamps: true,
    versionKey: false
})

const CustomersModel = mongoose.model('customers', DataSchema);

module.exports = CustomersModel;