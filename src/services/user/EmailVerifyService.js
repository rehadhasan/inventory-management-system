const SendEmailHelper = require("../../utility/SendEmailUtility");

const EmailVerifyService = async (req,res)=>{
    try{
        //Database Query
        let email = req.params.email;
        let OTPCode = Math.floor(100000 + Math.random()*90000);

        //Database Action
        let data = await UserModel.findOne({email:email}).countDocuments();
        if(data.length > 0){
            //1st Operation
            let OTPSend = await OTPModel.create({email:email, otp:OTPCode});

            //2nd Operation
            let sendEmail = await SendEmailHelper(email, `Your pin code is = ${OTPCode}, "Inventory Email Verification`)

            return {status: "success", data: sendEmail};
        }else{
            return {status: "fail", data: "User not found"};
        }
    }catch (e) {
        return {status: "fail", data: e.toString()}
    }
}

module.exports = EmailVerifyService;