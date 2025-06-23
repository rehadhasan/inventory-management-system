const {EncodeToken} = require("../../utility/TokenHelper");

const UserLoginService = async (req,res)=>{
    try{
        //Database Query
        let reqBody = req.body;

        //Database Query
        let match = {$match: reqBody};
        let data = await UserModel.aggregate([match])

        if(data.length > 0){
            //Encode Token
            let token = await EncodeToken({email:data.email}, {userID: data.userID});

            return {status: "success", token: token, data: data};
        }else{
            return {status: "unauthorized"};
        }
    }catch (e) {
        return {status: "fail", data: e.toString()}
    }
}

module.exports = UserLoginService;