const OTPVerifyService = async (req,res)=>{
    try{
        //Database Query
        let email = req.params.email;
        let OTPCode = req.params.otp;
        let status = 0;
        let statusUpdate = 1;

        //Database Action
        let data = await OTPModel.findOne({email:email, otp:OTPCode, status:status}).countDocuments();
        if(data.length > 0){
            //1st Operation
            let OTPSend = await OTPModel.updateOne({email:email, otp:OTPCode, status:status}, {email:email, otp:OTPCode, status: statusUpdate});

            return {status: "success", data: OTPSend};
        }else{
            return {status: "fail", data: "Invalid OTP Code"};
        }
    }catch (e) {
        return {status: "fail", data: e.toString()}
    }
}

module.exports = OTPVerifyService;