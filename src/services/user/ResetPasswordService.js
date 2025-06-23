const ResetPasswordService = async (req,res)=>{
    try{
        //Database Query
        let email = req.body['email'];
        let OTPCode = req.body['otp'];
        let password = req.body['password'];
        let statusUpdate = 1;

        //Database Action
        let data = await OTPModel.findOne({email:email, otp:OTPCode, status:statusUpdate}).countDocuments();
        if(data.length > 0){
            //1st Operation
            let passUpdate = await UserModel.updateOne({email:email}, {password:password});

            return {status: "success", data: passUpdate};
        }else{
            return {status: "fail", data: "Invalid Request"};
        }
    }catch (e) {
        return {status: "fail", data: e.toString()}
    }
}

module.exports = ResetPasswordService;