const CreateService = require("../../services/common/CreateService");
const BrandModel = require("../../models/brands/BrandModel");
const UpdateService = require("../../services/common/UpdateService");
const ListService = require("../../services/common/ListService");
const DropDownService = require("../../services/common/DropDownService");

exports.CreateBrand = async (req, res) => {
    let result = await CreateService(req, BrandModel);
    res.status(200).json(result);
}

exports.UpdateBrand = async (req, res) => {
    let result = await UpdateService(req, BrandModel);
    res.status(200).json(result);
}

exports.BrandList = async (req, res) => {
    let searchRgx = {$regex: req.params.searchKeyword, $options: 'i'}
    let searchArray = [{brandName: searchRgx}];
    let result = await ListService(req, BrandModel, searchArray);
    res.status(200).json(result);
}

exports.BrandDropDown = async (req, res) => {
    let result = await DropDownService(req, BrandModel, {_id:1, brandName:1});
    res.status(200).json(result);
}