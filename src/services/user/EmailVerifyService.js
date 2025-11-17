const SendEmailHelper = require("../../utility/SendEmailUtility");
const UserModel = require("../../models/users/UserModel");
const OTPModel = require("../../models/users/OTPModel");

const EmailVerifyService = async (req)=>{
    try{
        //Database Query
        let email = req.params.email;
        let OTPCode = Math.floor(100000 + Math.random()*90000);
        let status = 0;

        //Database Action
        let data = await UserModel.findOne({email:email}).countDocuments();
        if(data === 1){
            //1st Operation
            let OTPSend = await OTPModel.updateOne({email:email}, {$set:{email:email, otp:OTPCode, status:status}}, {upsert:true});

            //2nd Operation
            let sendEmail = await SendEmailHelper(email, `Your one time pin code is = ${OTPCode}`, 'Inventory Email Verification')

            return {status: "success", data: "OTP Send to your email"};
        }else{
            return {status: "fail", data: "User not found"};
        }
    }catch (e) {
        return {status: "fail", data: e.toString()}
    }
}

module.exports = EmailVerifyService;