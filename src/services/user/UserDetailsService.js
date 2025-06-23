const UserDetailsService = async (req,res)=>{
    try{
        //Database Query
        let email = req.headers['email'];

        //Database Action
        let match = {$match: {email: email}};
        let data = await UserModel.aggregate([match])

        return {status: "success", data: data};
    }catch (e) {
        return {status: "fail", data: e.toString()}
    }
}

module.exports = UserDetailsService;