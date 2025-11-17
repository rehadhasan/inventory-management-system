const OTPModel = require("../../models/users/OTPModel");
const UserModel = require("../../models/users/UserModel");

const ResetPasswordService = async (req)=>{
    try{
        //Database Query
        let reqBody = req.body;
        let email = reqBody.email;
        let OTPCode = reqBody.otp;
        let password = reqBody.password;
        let status = 1;
        let statusUpdate = 0;
        let otpUpdate = 0;

        //Database Action
        let data = await OTPModel.findOne({email:email, otp:OTPCode, status:status}).countDocuments();
        if(data === 1){
            //1st Operation
            let UpdatePassword = await UserModel.updateOne({email:email}, {password:password});
            let UpdateOTP = await OTPModel.updateOne({email:email, otp:OTPCode, status:status}, {$set: {email:email, otp:otpUpdate, status: statusUpdate}}, {upsert:true});

            return {status: "success", data: "Password Reset Successfully"};
        }else{
            return {status: "fail", data: "Something went wrong"};
        }
    }catch (e) {
        return {status: "fail", data: e.toString()}
    }
}

module.exports = ResetPasswordService;