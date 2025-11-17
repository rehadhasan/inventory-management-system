const SuppliersModel = require("../../models/suppliers/SuppliersModel");
const CreateService = require("../../services/common/CreateService");
const UpdateService = require("../../services/common/UpdateService");
const ListService = require("../../services/common/ListService");
const DropDownService = require("../../services/common/DropDownService");

exports.CreateSupplier = async (req, res) => {
    let result = await CreateService(req, SuppliersModel);
    res.status(200).json(result);
}

exports.UpdateSupplier = async (req, res) => {
    let result = await UpdateService(req, SuppliersModel);
    res.status(200).json(result);
}

exports.SupplierList = async (req, res) => {
    let searchRgx = {$regex: req.params.searchKeyword, $options: 'i'}
    let searchArray = [{SuppliersName: searchRgx}, {Phone: searchRgx}, {Email: searchRgx}, {Address: searchRgx}];
    let result = await ListService(req, SuppliersModel, searchArray);
    res.status(200).json(result);
}

exports.SupplierDropDown = async (req, res) => {
    let result = await DropDownService(req, SuppliersModel, {_id:1, SuppliersName:1});
    res.status(200).json(result);
}