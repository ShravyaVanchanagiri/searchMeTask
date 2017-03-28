/**
 * Created by shravya on 28/3/17.
 */
var prepareRes = require("../apiUtils/prepareRes");
var errorRes = require("../apiUtils/errorRes");
var userModel = require("../models/userModel");
var addressModel = require("../models/addressModel");
var userRouter = {
    getUserDetails: function (req, res) {
        var queryParam = (req.query && req.query.q) ? JSON.parse(req.query.q) : req.body.q;
        var query={};
        if(queryParam.firstName){
            query.firstName=queryParam.firstName;
        }
        if(queryParam.lastName){
            query.lastName=queryParam.lastName;
        }
        if(queryParam.dateOfBirth){
            query.dateOfBirth=queryParam.dateOfBirth;
        }
        if(queryParam.address){
            query.address=queryParam.address;
        }
        var aggregate = [
            {"$match":query},
            { "$unwind": "$addresses" }
        ];
        console.log(JSON.stringify(aggregate));
        userModel.aggregate(aggregate, function(err1,users) {
            if (err1) {
                console.log(err);
                res.send(errorRes(500, "Failed"));
            } else {
                console.log("users",users);
                res.send(prepareRes(200, users, "OK"));
            }
        });
    }
};
module.exports = userRouter;


/*
userModel.find(query,function (err, users) {
    if (err) {
        console.log(err);
        res.send(errorRes(500, "Failed"));
    } else {
        console.log("users",users)
        res.send(prepareRes(200, users, "OK"));
    }
});*/
/*
{"$match":{ $or:[{"firstName":query}, {"lastName" : query}, {"address.state" : query}]}}*/

/*
userModel.aggregate([
    {"$match":{ "firstName" : query.firstName, "lastName" : query.lastName, "dateOfBirth" : query.dateOfBirth, "address" : query.address}},
    { "$unwind": "$addresses" },
    {"$lookup":{"from":"addresses","localField":"addresses","foreignField":"_id","as":"address"}},
    {"$match":{$or:[{"address.city":query.address}, {"address.street" : query.address}, {"address.state" : query.address}]}}
]).exec(function(err1,users) {
    if (err1) {
        console.log(err);
        res.send(errorRes(500, "Failed"));
    } else {
        console.log("users",users)
        res.send(prepareRes(200, users, "OK"));
    }
});*/
