const CategoriesModel = require("../../models/categories/CategoriesModel");
const CreateService = require("../../services/common/CreateService");
const UpdateService = require("../../services/common/UpdateService");
const ListService = require("../../services/common/ListService");
const DropDownService = require("../../services/common/DropDownService");

exports.CreateCategory = async (req, res) => {
    let result = await CreateService(req, CategoriesModel);
    res.status(200).json(result);
}

exports.UpdateCategory = async (req, res) => {
    let result = await UpdateService(req, CategoriesModel);
    res.status(200).json(result);
}

exports.CategoryList = async (req, res) => {
    let searchRgx = {$regex: req.params.searchKeyword, $options: 'i'}
    let searchArray = [{categoryName: searchRgx}];
    let result = await ListService(req, CategoriesModel, searchArray);
    res.status(200).json(result);
}

exports.CategoryDropDown = async (req, res) => {
    let result = await DropDownService(req, CategoriesModel, {_id:1, categoryName:1});
    res.status(200).json(result);
}