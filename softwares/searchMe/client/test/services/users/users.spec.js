'use strict';

/*describe is just like function and 'it' are inner functions */

describe('Home controller', function(){
    var homeController;                    /* Local variables */
    var $controller, $rootScope, $injector, $scope;      /* Necessray varaibles */
    var $q, homeService;   /* Dependencies */

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
            "address":{"_id":"58da5e205c950410c8677c72","street":"KPHB colony","houseNo":"181","city":"Hyderabad","state":"Telangana","__v":0}}],"users":{"_id":"58da5e205c950410c8677c7e","firstName":"Shravya","lastName":"Vanchanagiri","dateOfBirth":"1994-10-16T18:30:00.000Z"}}],"message":"OK"};
    var outputObject = responseObject.data;

    beforeEach(function(){
        module('searchMe');
        module('searchMe.home');

    });

    beforeEach(inject(function(_$controller_, _$injector_, _$rootScope_, _$q_, _homeService_){
        $controller = _$controller_;
        $rootScope = _$rootScope_;
        $scope = $rootScope.$new();
        $q = _$q_;
        homeService = _homeService_;
        $injector= _$injector_;
    })) ;
    beforeEach(function(){
        spyOn(homeService, 'getUserDetails').and.callFake(function(query){
            /*Server returns promise object*/
            return {
                then: function(callback) {return callback(responseObject);}
            };
        });

        homeController = $controller('homeController', {$scope : $scope})
    });
    describe('users',function(){
        it('users check',function (){
            var user={}
            user.firstName="Shravya"
            var controller = $controller('homeController', {$scope : $scope})
            controller.funOk(user);
            expect(JSON.stringify(controller.data)).toBe(JSON.stringify(outputObject));
        })
    });
});