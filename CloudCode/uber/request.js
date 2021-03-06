var product_id = "6bf8dc3b-c8b0-4f37-9b61-579e64016f7a";

module.exports = function(req,res){
    var access_token;
    var query = new AV.Query(ACL.Users);
    query.equalTo('client_id',config.client_id);
    return query.first().then(function(user){
        access_token = user.get('access_token');
        _Get(CONST.UBER_API + "/v1/products",{
            latitude:39.908202,
            longitude:116.322852
        },{
            "Authorization":" Token " + config.server_token
        }).then(function(body){
            var b = JSON.parse(body.body);
            var product_id = b.products[0].product_id;
            return _Post(CONST.UBER_API + "/v1/requests",{
                product_id:product_id,
                start_latitude: 39.908202,
                start_longitude: 116.322852,
                end_latitude: 39.90872,
                end_longitude: 116.39739
            },{
                "Authorization":" Bearer " + access_token,
                "Content-Type":"application/json"
            });
        }).then(function(body){
            return res.success(library.stdReturn(body));
        }).catch(function(e){
            return res.error(library.stdIntError(e));
        });
    });

};
