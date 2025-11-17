const {EncodeToken} = require("../../utility/TokenHelper");
const UserModel = require("../../models/users/UserModel");

const UserLoginService = async (req)=>{
    try{
        //Database Query
        let reqBody = req.body;
        let email = reqBody.email;
        let password = reqBody.password;

        //Database Query
        let data = await UserModel.findOne({email:email, password:password}).countDocuments();

        if(data === 1){
            //Encode Token
            let userID = await UserModel.findOne({email:email}).select('_id');
            let token = await EncodeToken(email, userID);
            let userDetails = await UserModel.findOne({email:email});

            return {status: "success", token: token, data: userDetails};
        }else{
            return {status: "fail", data: "No User Found"};
        }
    }catch (e) {
        return {status: "fail", data: e.toString()}
    }
}

module.exports = UserLoginService;