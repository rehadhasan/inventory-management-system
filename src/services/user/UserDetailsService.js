const UserModel = require("../../models/users/UserModel");

const UserDetailsService = async (req)=>{
    try{
        //Database Query
        let email = req.headers.email;

        //Database Action
        let data = await UserModel.findOne({email:email});

        return {status: "success", data: data};
    }catch (e) {
        return {status: "fail", data: e.toString()}
    }
}

module.exports = UserDetailsService;