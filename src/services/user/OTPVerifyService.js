const OTPModel = require("../../models/users/OTPModel");

const OTPVerifyService = async (req,res)=>{
    try{
        //Database Query
        let email = req.params.email;
        let OTPCode = req.params.otp;
        let status = 0;
        let statusUpdate = 1;

        //Database Action
        let data = await OTPModel.findOne({email:email, otp:OTPCode, status:status}).countDocuments();
        if(data === 1){
            //1st Operation
            let OTPUpdate = await OTPModel.updateOne({email:email, otp:OTPCode, status:status}, {$set: {email:email, otp:OTPCode, status: statusUpdate}}, {upsert:true});

            return {status: "success", data: "OTP Verify Successfully"};
        }else{
            return {status: "fail", data: "Invalid OTP Code"};
        }
    }catch (e) {
        return {status: "fail", data: e.toString()}
    }
}

module.exports = OTPVerifyService;