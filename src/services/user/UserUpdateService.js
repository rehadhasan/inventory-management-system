const UserModel = require("../../models/users/UserModel");

const UserUpdateService = async (req)=>{
    try{
        //Database Query
        let email = req.headers.email;
        let postBody = req.body;

        //Database Action
        let data = await UserModel.updateOne({email: email}, postBody);

        return {status: "success", data: data};
    }catch (e) {
        return {status: "fail", data: e.toString()}
    }
}

module.exports = UserUpdateService;