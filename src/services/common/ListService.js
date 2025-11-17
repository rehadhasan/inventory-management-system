const ListService = async (Request, DataModel, SearchArray) => {
    try{
        let pageNo = Number(Request.params.pageNo);
        let perPage = Number(Request.params.perPage);
        let searchValue = Number(Request.params.searchValue);
        let email = Request.headers.email;

        let skipRow = (pageNo - 1) * perPage;
        let data;

        if(searchValue !== "0"){
            let searchQuery = {$or:SearchArray}
            data = await DataModel.aggregate([
                {$match: {userEmail:email}},
                {$match: searchQuery},
                {
                    $facet:{
                        Total:[{$count: "count"}],
                        Rows:[{$skip:skipRow},{$limit:perPage}]
                    }
                }
            ])
        }else{
            data = await DataModel.aggregate([
                {$match: {userEmail:email}},
                {
                    $facet:{
                        Total:[{$count: "count"}],
                        Rows:[{$skip:skipRow},{$limit:perPage}]
                    }
                }
            ])
        }
        return {status: "success", data: data}
    }catch (e) {
        return {status: "fail", data: e.toString()}
    }
}

module.exports = ListService;