/**
 * Created by shravya on 4/4/17.
 */
'use strict';
describe('Home_controller', function() {
    var homeController;                    /* Local variables */
    var $controller, $rootScope, $injector, $scope;      /* Necessray varaibles */
    var $q, homeService,deffered,api;   /* Dependencies */

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
    }));
    it("get Users",function(){
        var query = {"fields":"firstName,lastName,dateOfBith,address"};
        var result = homeService.getUserDetails(query);
        expect(result.constructor.name).toEqual('Promise');
    });
});