/**
 * Created by shravya on 31/3/17.
 */
(function() {
    'use strict';

    // Creating the module and factory we referenced in the beforeEach blocks in our test file
    angular.module('searchMe.api.users', [])
        .factory('Users', function() {
            var Users = {};
            var userList = [
                {
                    id: '1',
                    name: 'Jane',
                    role: 'Designer',
                    location: 'New York',
                    twitter: 'gijane'
                },
                {
                    id: '2',
                    name: 'Bob',
                    role: 'Developer',
                    location: 'New York',
                    twitter: 'billybob'
                },
                {
                    id: '3',
                    name: 'Jim',
                    role: 'Developer',
                    location: 'Chicago',
                    twitter: 'jimbo'
                },
                {
                    id: '4',
                    name: 'Bill',
                    role: 'Designer',
                    location: 'LA',
                    twitter: 'dabill'
                }
            ];


            // Defining all to make our test pass. It doesn't need to do anything yet.
            Users.all = function() {
                console.log("coming here");
                return userList;
            };

            return Users;
        });
})();