const mongoose = require('mongoose');

const DataSchema = mongoose.Schema({
    userEmail: {type: String, required: true},
    categoryName: {type: String, required: true}
},{
    timestamps: true,
    versionKey: false
})

const CategoriesModel = mongoose.model('categories', DataSchema);

module.exports = CategoriesModel;