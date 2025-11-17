const DropDownService = async (Request, DataModel, Projection) => {
    try{
        let email = Request.headers.email;
        let data = await DataModel.aggregate([
            {$match: {userEmail:email}},
            {$project: Projection}
        ])
        return {status: "success", data: data}
    }catch (e) {
        return {status: "fail", data: e.toString()}
    }
}

module.exports = DropDownService;