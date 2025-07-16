const CreateService = async (Request, DataModel) => {
    try{
        let postBody = Request.body;
        let email;
        email = Request.headers.email;
        postBody.userEmail = email;
        let data = await DataModel.create(postBody);
        return {status: "success", data: data}
    }catch (e) {
        return {status: "fail", data: e.toString()}
    }
}

module.exports = CreateService;