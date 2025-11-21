const mongoose = require('mongoose');

const DataSchema = mongoose.Schema({
    userEmail: {type: String, required: true},
    typeID: {type: mongoose.Schema.Types.ObjectId, required: true},
    Name: {type: String, required: true},
    Ammount: {type: Number, required: true},
    Note: {type: String, required: true}
},{
    timestamps: true,
    versionKey: false
})

const ExpenseModel = mongoose.model('expense', DataSchema);

module.exports = ExpenseModel;