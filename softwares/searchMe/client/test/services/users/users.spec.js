'use strict';

/*describe is just like function and 'it' are inner functions */

describe('Home controller', function(){
    var homeController;                    /* Local variables */
    var $controller, $rootScope, $injector, $scope;      /* Necessray varaibles */
    var $q, homeService,deffered,api;   /* Dependencies */

    var responseObject = {"status":200,"data":[{
       "_id":"58da5e205c950410c8677c7e",
       "data":[{
           "address":{
               "_id":"58da5e205c950410c8677c73",
               "street":"kareemabad",
               "houseNo":"18-7-4/1",
               "city":"warangal",
               "state":"Telangana",
               "__v":0}},{
           "address":{
               "_id":"58da5e205c950410c8677c72",
               "street":"KPHB colony",
               "houseNo":"181",
               "city":"Hyderabad",
               "state":"Telangana",
               "__v":0}}],
           "users":{
               "_id":"58da5e205c950410c8677c7e",
               "firstName":"Shravya",
               "lastName":"Vanchanagiri",
               "dateOfBirth":"1994-10-16T18:30:00.000Z"}
    }],"message":"OK"};
    var responseObject1 = {"status":200,"data":[

        {
           "_id" :"58da5e205c950410c8677c81",
           "data" : [
                {
                   "address" : {
                       "_id" : "58da5e205c950410c8677c75",
                       "street" :"kareemabad",
                       "houseNo" :"202D",
                       "city" :"warangal",
                       "state" :"Telangana",
                       "__v" : 0
                    }
                },
                {
                   "address" : {
                       "_id" : "58da5e205c950410c8677c74",
                       "street" :"KPHB colony",
                       "houseNo" :"193",
                       "city" :"Hyderabad",
                       "state" :"Telangana",
                       "__v" : 0
                    }
                }
            ],
           "users" : {
               "_id" : "58da5e205c950410c8677c81",
               "firstName" :"pinky",
               "lastName" :"smile",
               "dateOfBirth" : "1996-09-01T18:30:00.000Z"
            }
        },
        {
           "_id" : "58da5e205c950410c8677c7f",
           "data" : [
                {
                   "address" : {
                       "_id" : "58da5e205c950410c8677c78",
                       "street" :"panjagutta",
                       "houseNo" :"198",
                       "city" :"Hyderabad",
                       "state" :"Telangana",
                       "__v" : 0
                    }
                },
                {
                   "address" : {
                       "_id" : "58da5e205c950410c8677c79",
                       "street" :"shivanagar",
                       "houseNo" :"202C",
                       "city" :"warangal",
                       "state" :"Telangana",
                       "__v" : 0
                    }
                }
            ],
           "users" : {
               "_id" : "58da5e205c950410c8677c7f",
               "firstName" :"ram",
               "lastName" :"ramu",
               "dateOfBirth" : "1993-01-31T18:30:00.000Z"
            }
        },
        {
           "_id" : "58da5e205c950410c8677c83",
           "data" : [
                {
                   "address" : {
                       "_id" : "58da5e205c950410c8677c7b",
                       "street" :"adv colony",
                       "houseNo" :"202C",
                       "city" :"warangal",
                       "state" :"Telangana",
                       "__v" : 0
                    }
                },
                {
                   "address" : {
                       "_id" : "58da5e205c950410c8677c7a",
                       "street" :"Ameerpet",
                       "houseNo" :"208T",
                       "city" :"Hyderabad",
                       "state" :"Telangana",
                       "__v" : 0
                    }
                }
            ],
           "users" : {
               "_id" : "58da5e205c950410c8677c83",
               "firstName" :"sita",
               "lastName" :"sit",
               "dateOfBirth" : "1982-01-31T18:30:00.000Z"
            }
        },
        {
           "_id" : "58da5e205c950410c8677c82",
           "data" : [
                {
                   "address" : {
                       "_id" : "58da5e205c950410c8677c76",
                       "street" :"uppal",
                       "houseNo" :"193",
                       "city" :"Hyderabad",
                       "state" :"Telangana",
                       "__v" : 0
                    }
                },
                {
                   "address" : {
                       "_id" : "58da5e205c950410c8677c77",
                       "street" :"hnk",
                       "houseNo" :"202D",
                       "city" :"warangal",
                       "state" :"Telangana",
                       "__v" : 0
                    }
                }
            ],
           "users" : {
               "_id" : "58da5e205c950410c8677c82",
               "firstName" :"divya",
               "lastName" :"dimpu",
               "dateOfBirth" : "1999-01-31T18:30:00.000Z"
            }
        },
        {
           "_id" : "58da5e205c950410c8677c80",
           "data" : [
                {
                   "address" : {
                       "_id" : "58da5e205c950410c8677c7d",
                       "street" :"bollikunta",
                       "houseNo" :"202C",
                       "city" :"warangal",
                       "state" :"Telangana",
                       "__v" : 0
                    }
                },
                {
                   "address" : {
                       "_id" : "58da5e205c950410c8677c7c",
                       "street" :"balnagar",
                       "houseNo" :"200A",
                       "city" :"Hyderabad",
                       "state" :"Telangana",
                       "__v" : 0
                    }
                }
            ],
           "users" : {
               "_id" : "58da5e205c950410c8677c80",
               "firstName" :"laxman",
               "lastName" :"lucky",
               "dateOfBirth" : "1972-01-31T18:30:00.000Z"
            }
        },
        {
           "_id" : "58da5e205c950410c8677c7e",
           "data" : [
                {
                   "address" : {
                       "_id" : "58da5e205c950410c8677c73",
                       "street" :"kareemabad",
                       "houseNo" :"18-7-4/1",
                       "city" :"warangal",
                       "state" :"Telangana",
                       "__v" : 0
                    }
                },
                {
                   "address" : {
                       "_id" : "58da5e205c950410c8677c72",
                       "street" :"KPHB colony",
                       "houseNo" :"181",
                       "city" :"Hyderabad",
                       "state" :"Telangana",
                       "__v" : 0
                    }
                }
            ],
           "users" : {
               "_id" : "58da5e205c950410c8677c7e",
               "firstName" :"Shravya",
               "lastName" :"Vanchanagiri",
               "dateOfBirth" : "1994-10-16T18:30:00.000Z"
            }
        }
    ],"message":"OK"};//object response for telangana without sorting
    var outputObject = responseObject.data;

    beforeEach(function(){
        module('searchMe');
        module('searchMe.home');

    });
    beforeEach(inject(function(_$controller_, _$injector_, _$rootScope_, _$q_, _homeService_,_api_){
        $controller = _$controller_;
        $rootScope = _$rootScope_;
        $scope = $rootScope.$new();
        $q = _$q_;
        homeService = _homeService_;
        $injector= _$injector_;
        deffered=$q.defer();
        api=_api_
    })) ;
    beforeEach(function(){
        spyOn(homeService, 'getUserDetails').and.callFake(function(query){
            /*Server returns promise object*/
            console.log("in mock home");
            return {
                then: function(callback) {
                    if(query.address =="Telangana")
                        return callback(responseObject1);
                    else
                    return callback(responseObject);
                }
            };
        });

        homeController = $controller('homeController', {$scope : $scope})
    });
    describe('users',function(){
        it('users check',function (){
            var controller = $controller('homeController', {$scope : $scope})
            controller.user.fname="Shravya";
            controller.funOk();
            expect(JSON.stringify(controller.data)).toBe(JSON.stringify(outputObject));
        })
    });
    describe('date',function(){
        it('date check',function(){
            var resDate = responseObject.data[0].users.dateOfBirth;
            var controller = $controller('homeController', {$scope : $scope})
            controller.user = {
               "dateOfBirth" : '1994-10-16T18:30:00.000Z'
            };
            controller.funOk();
            expect(controller.user.dateOfBirth).toBe(resDate);
        });
    });
    describe('minLengthValidationFname',function(){
        it('min length',function(){
            var minLength= 3;
            var controller = $controller('homeController',{$scope : $scope})
            controller.user = {
               "firstName" : 'Shravya'
            };
            controller.funOk();
            expect(controller.user.firstName.length).toBeGreaterThanOrEqual(minLength);

        })
    });
    describe('minLengthValidationLname',function(){
        it('min length',function(){
            var minLength= 3;
            var controller = $controller('homeController',{$scope : $scope})
            controller.user = {
               "lastName" : 'lucky'
            };
            controller.funOk();
            expect(controller.user.lastName.length).toBeGreaterThanOrEqual(minLength);

        })
    });
    describe('minLengthValidationAddress',function(){
        it('addressVal',function(){
            var minLength= 3;
            var controller = $controller('homeController',{$scope : $scope})
            controller.user = {
               "address" : 'warangal'
            };
            controller.funOk();
            expect(controller.user.address.length).toBeGreaterThanOrEqual(minLength);
        })
    });
    it('given input empty', function () {
        var user = {};
        var $scope = {};
        var controller = $controller('homeController', { $scope: $scope });
        controller.funOk(user);
        expect(controller.errorMessage).toEqual(true);
    });
    it('clear', function(){
        var $scope = {};
        var controller = $controller('homeController',{$scope: $scope});
        controller.clear();
        expect(controller.user).toEqual({});
    });
    it('pagination',function(){
        var paginatedGotData = [
            {
               "_id" : "58da5e205c950410c8677c81",
               "data" : [
                    {
                       "address" : {
                           "_id" : "58da5e205c950410c8677c75",
                           "street" :"kareemabad",
                           "houseNo" :"202D",
                           "city" :"warangal",
                           "state" :"Telangana",
                           "__v" : 0
                        }
                    },
                    {
                       "address" : {
                           "_id" : "58da5e205c950410c8677c74",
                           "street" :"KPHB colony",
                           "houseNo" :"193",
                           "city" :"Hyderabad",
                           "state" :"Telangana",
                           "__v" : 0
                        }
                    }
                ],
               "users" : {
                   "_id" : "58da5e205c950410c8677c81",
                   "firstName" :"pinky",
                   "lastName" :"smile",
                   "dateOfBirth" : "1996-09-01T18:30:00.000Z"
                }
            },
            {
               "_id" : "58da5e205c950410c8677c7f",
               "data" : [
                    {
                       "address" : {
                           "_id" : "58da5e205c950410c8677c78",
                           "street" :"panjagutta",
                           "houseNo" :"198",
                           "city" :"Hyderabad",
                           "state" :"Telangana",
                           "__v" : 0
                        }
                    },
                    {
                       "address" : {
                           "_id" : "58da5e205c950410c8677c79",
                           "street" :"shivanagar",
                           "houseNo" :"202C",
                           "city" :"warangal",
                           "state" :"Telangana",
                           "__v" : 0
                        }
                    }
                ],
               "users" : {
                   "_id" : "58da5e205c950410c8677c7f",
                   "firstName" :"ram",
                   "lastName" :"ramu",
                   "dateOfBirth" : "1993-01-31T18:30:00.000Z"
                }
            },
        ]
        var $scope = {};
        var controller = $controller('homeController',{$scope : $scope});
        controller.user.address ="Telangana";
        controller.funOk();
        expect(JSON.stringify(controller.data)).toBe(JSON.stringify(paginatedGotData));
        expect(controller.data.length).toBe(paginatedGotData.length);
        expect(controller.data).toEqual(paginatedGotData);
    })

});