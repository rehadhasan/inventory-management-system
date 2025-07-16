const mongoose = require('mongoose');

const DataSchema = mongoose.Schema({
    userEmail: {type: String, required: true},
    brandName: {type: String, required: true}
},{
    timestamps: true,
    versionKey: false
})

const BrandModel = mongoose.model('brands', DataSchema);

module.exports = BrandModel;