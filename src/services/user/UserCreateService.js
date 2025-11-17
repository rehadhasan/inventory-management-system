const UserModel = require("../../models/users/UserModel");

const UserCreateService = async (req)=>{
    try{
        //Database Query
        let reqBody = req.body;

        //Database Action
        let data = await UserModel.create(reqBody);

        return {status: "success", data: data};
    }catch (e) {
        return {status: "fail", data: e.toString()}
    }
}

module.exports = UserCreateService;