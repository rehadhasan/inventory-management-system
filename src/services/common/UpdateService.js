const mongoose = require('mongoose');
const ObjectId = mongoose.Types.ObjectId;

const UpdateService = async (Request, DataModel) => {
    try{
        let postBody = Request.body;
        let email = Request.headers.email;
        let ID = new ObjectId(Request.params.ID);
        postBody.userEmail = email;
        let data = await DataModel.updateOne({_id:ID, userEmail:email}, postBody);
        return {status: "success", data: data}
    }catch (e) {
        return {status: "fail", data: e.toString()}
    }
}

module.exports = UpdateService;