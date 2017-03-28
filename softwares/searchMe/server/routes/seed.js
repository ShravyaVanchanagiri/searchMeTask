/**
 * Created by shravya on 28/3/17.
 */
var mongoose = require('mongoose');
var fs = require('fs');
var UserModel = require('../models/userModel');
var AddressModel = require('../models/addressModel');
var q = require('q');
// Connect to the db
mongoose.connect('mongodb://127.0.0.1:27017/searchMe', function (error) {
    if (!error) {
        console.log("connection established...!");
    }
});

fs.readFile('/home/shravya/WebstormProjects/searchMeTask/softwares/searchMe/server/routes/userData.json', 'utf8', function (err, data) {

    if (err) {
        return console.log(err);
    }
    if (data) {
        var users = JSON.parse(data);
        console.log(users.length);
        for (var i = 0; i < users.length; i++) {
            addUser(users[i]);
        }

        function addUser(user) {
            var eachUser = [];
            eachUser.firstName = user.firstName;
            eachUser.lastName = user.lastName;
            eachUser.dateOfBirth = new Date(user.dateOfBirth);
            eachUser.addresses = [];
            var promises = [];


            user.addresses.forEach(function (eachAddress) {
                promises.push(addAddresses(eachUser, eachAddress));
            })

            q.allSettled(promises).then(function (res) {
                var allUsers = UserModel(eachUser);
                allUsers.save(function (err) {
                    if (err) {
                        console.log("error in user storing", err);
                    } else {
                        console.log("data stored in db successfully");
                    }
                })
            });
        }

        function addAddresses(eachUser, eachAddress) {
            var newAddress = {};
            var deffered = q.defer();
            newAddress.street = eachAddress.street;
            newAddress.houseNo = eachAddress.houseNo;
            newAddress.city = eachAddress.city;
            newAddress.state = eachAddress.state;
            var address = AddressModel(newAddress);
            address.save(function (err) {
                if (err) {
                    deffered.reject("Error occured while storing addresses");
                }
                else {
                    eachUser.addresses.push(address._id);
                    deffered.resolve();
                }
            });
            return deffered.promise;
        }
    }
});