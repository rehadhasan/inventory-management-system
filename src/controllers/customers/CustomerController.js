const CustomersModel = require("../../models/customers/CustomersModel");
const CreateService = require("../../services/common/CreateService");
const UpdateService = require("../../services/common/UpdateService");
const ListService = require("../../services/common/ListService");
const DropDownService = require("../../services/common/DropDownService");

exports.CreateCustomer = async (req, res) => {
    let result = await CreateService(req, CustomersModel);
    res.status(200).json(result);
}

exports.UpdateCustomer = async (req, res) => {
    let result = await UpdateService(req, CustomersModel);
    res.status(200).json(result);
}

exports.CustomerList = async (req, res) => {
    let searchRgx = {$regex: req.params.searchKeyword, $options: 'i'}
    let searchArray = [{CustomerName: searchRgx}, {Phone: searchRgx}, {Email: searchRgx}, {Address: searchRgx}];
    let result = await ListService(req, CustomersModel, searchArray);
    res.status(200).json(result);
}

exports.CustomerDropDown = async (req, res) => {
    let result = await DropDownService(req, CustomersModel, {_id:1, CustomerName:1});
    res.status(200).json(result);
}