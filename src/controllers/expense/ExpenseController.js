const ExpenseModel = require("../../models/expense/ExpenseModel");
const CreateService = require("../../services/common/CreateService");
const UpdateService = require("../../services/common/UpdateService");

exports.CreateExpense = async (req, res) => {
    let result = await CreateService(req, ExpenseModel);
    res.status(200).json(result);
}

exports.UpdateExpense = async (req, res) => {
    let result = await UpdateService(req, ExpenseModel);
    res.status(200).json(result);
}