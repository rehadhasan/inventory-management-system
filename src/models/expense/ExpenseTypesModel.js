const mongoose = require('mongoose');

const DataSchema = mongoose.Schema({
    userEmail: {type: String, required: true},
    Name: {type: String, required: true, unique: true}
},{
    timestamps: true,
    versionKey: false
})

const ExpenseTypesModel = mongoose.model('expenseType', DataSchema);

module.exports = ExpenseTypesModel;