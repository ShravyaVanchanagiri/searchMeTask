/**
 * Created by shravya on 28/3/17.
 */
(function () {
    angular.module('searchMe.home')
        .controller("homeController", homeController);

    homeController.$inject = ['$http', 'homeService', '$rootScope', '$state', 'NgTableParams', '$filter'];

    function homeController($http, homeService, $rootScope, $state, NgTableParams, $filter) {
        var vm = this;
        vm.funOk = funOk;
        vm.user={};
        loadTable();
        function funOk() {
            vm.tableParams.reload();
        }
        function loadTable(){
            vm.tableParams = new NgTableParams({
                page: 1,
                count: 5
            }, {
                getData: function (params) {
                    var query = {
                        "firstName" : vm.user.fname,
                        "lastName" : vm.user.lname,
                        "dateOfBirth" : vm.user.dob,
                        "address" : vm.user.address
                    };
                    query.limit = params.count();
                    query.numberToSkip = (params.page() - 1) * params.count();
                    query.sortingCriteria = params.sorting();
                    console.log(query);

                    return homeService.getUserDetails(query).then(
                        function (response) {
                            console.log("coming here");
                            vm.users = response.data;
                            var filterObj = params.filter(), filteredData = $filter('filter')(vm.users, filterObj);
                            var postsData = $filter('orderBy')(filteredData, params.orderBy());
                            vm.data = postsData.slice((params.page() - 1) * params.count(), params.page() * params.count());
                            params.total(vm.users);
                            return vm.data;
                        },
                        function (failure) {
                            console.log(failure);
                        });
                }
            });
        }
    }
})();


/*function funOk(){
    console.log(vm.user.fname);
    var query = {
        firstName : vm.user.fname,
        lastName : vm.user.lname,
        dateOfBirth : vm.user.dob,
        address : vm.user.address
    };
    homeService.getUserDetails(query).then(success).catch(failure);
    function success(response) {
        vm.users = response.data;
        console.log(vm.users);
        loadTable();
    }

    function failure(failure) {

    }
}
function loadTable() {
    vm.tableParams = new NgTableParams({}, {
        getData: function (params) {
            console.log(vm.data);
            vm.data = vm.users.slice((params.page() - 1) * params.count(), params.page() * params.count());
            return vm.data;
        }
    });
}*/
