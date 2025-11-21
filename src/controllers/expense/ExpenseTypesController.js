const ExpenseTypesModel = require("../../models/expense/ExpenseTypesModel");
const CreateService = require("../../services/common/CreateService");
const UpdateService = require("../../services/common/UpdateService");
const ListService = require("../../services/common/ListService");
const DropDownService = require("../../services/common/DropDownService");

exports.CreateExpenseType = async (req, res) => {
    let result = await CreateService(req, ExpenseTypesModel);
    res.status(200).json(result);
}

exports.UpdateExpenseType = async (req, res) => {
    let result = await UpdateService(req, ExpenseTypesModel);
    res.status(200).json(result);
}

exports.ExpenseTypeList = async (req, res) => {
    let searchRgx = {$regex: req.params.searchKeyword, $options: 'i'}
    let searchArray = [{Name: searchRgx}];
    let result = await ListService(req, ExpenseTypesModel, searchArray);
    res.status(200).json(result);
}

exports.ExpenseTypeDropDown = async (req, res) => {
    let result = await DropDownService(req, ExpenseTypesModel, {_id:1, Name:1});
    res.status(200).json(result);
}