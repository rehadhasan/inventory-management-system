const ExpenseModel = require("../../models/expense/ExpenseModel");
const CreateService = require("../../services/common/CreateService");
const UpdateService = require("../../services/common/UpdateService");
const ListOneJoinService = require("../../services/common/ListOneJoinService");

exports.CreateExpense = async (req, res) => {
    let result = await CreateService(req, ExpenseModel);
    res.status(200).json(result);
}

exports.UpdateExpense = async (req, res) => {
    let result = await UpdateService(req, ExpenseModel);
    res.status(200).json(result);
}

exports.ExpenseList = async (req, res) => {
    let searchRgx = {$regex: req.params.searchKeyword, $options: 'i'}
    let searchArray = [{Ammount: searchRgx}, {Note: searchRgx}, {'Type.Name': searchRgx}];
    let JoinStage = {$lookup: {from: "expensetypes", localField: "typeID", foreignField: "_id", as: "Type"}}
    let result = await ListOneJoinService(req, ExpenseModel, searchArray, JoinStage);
    res.status(200).json(result);
}