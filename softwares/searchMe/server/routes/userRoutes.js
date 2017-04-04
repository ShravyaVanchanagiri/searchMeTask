/**
 * Created by shravya on 28/3/17.
 */
var prepareRes = require("../apiUtils/prepareRes");
var errorRes = require("../apiUtils/errorRes");
var userModel = require("../models/userModel");
var addressModel = require("../models/addressModel");
var dateUtil = require("../commonUtils/dateUtil");
var userRouter = {
    getUserDetails: function (req, res) {
        var queryParam = (req.query && req.query.q) ? JSON.parse(req.query.q) : req.body.q;
        console.log("#%#%#%#%#%#%#%#%#%#%#%#%#%#%#%#%#%#%#",queryParam);
        var query = [];
        var orList = [];
        if (queryParam.firstName) {
            orList.push({"firstName": queryParam.firstName})
        }
        if (queryParam.lastName) {
            orList.push({"lastName": queryParam.lastName})
        }
        if (queryParam.dateOfBirth) {
            orList.push({"dateOfBirth": dateUtil.getDate(queryParam.dateOfBirth)})
        }
        console.log(orList);
        if (orList.length != 0) {
            query.push({"$match": {$or: orList}});
        }
        query.push({"$unwind": "$addresses"},
            {"$lookup": {"from": "addresses", "localField": "addresses", "foreignField": "_id", "as": "address"}});
        if (queryParam.address) {
            query.push({
                "$match": {
                    $or: [{"address.city": queryParam.address}, {"address.street": queryParam.address},
                        {"address.state": queryParam.address}]
                }
            })
        }
        query.push({"$unwind": "$address"}, {
                "$group": {
                    "_id": "$_id", "data": {
                        "$addToSet": {
                            "address": "$address",
                            "user": {
                                "_id": "$_id", "firstName": "$firstName", "lastName": "$lastName",
                                "dateOfBirth": "$dateOfBirth"
                            }
                        }
                    }
                }
            },
            {"$project": {"data.address": 1, "users": {"$arrayElemAt": ["$data.user", 0]}}});

        console.log(query);
        userModel.aggregate(query).skip(queryParam.numberToSkip).limit(queryParam.limit).exec(function (err1, users) {
            if (err1) {
                console.log(err1);
                res.send(errorRes(500, "Failed"));
            } else {
                console.log(users);
                res.send(prepareRes(200, users, "OK"));
            }
        });
    }
};
module.exports = userRouter;