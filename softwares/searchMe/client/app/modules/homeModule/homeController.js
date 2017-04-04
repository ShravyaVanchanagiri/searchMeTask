/**
 * Created by shravya on 28/3/17.
 */
(function () {
    angular.module('searchMe.home')
        .controller("homeController", homeController);

    homeController.$inject = ['$http', 'homeService', '$rootScope', '$state', 'NgTableParams', '$filter'];

    function homeController($http, homeService, $rootScope, $state, NgTableParams, $filter) {
        var vm = this;
        vm.clear = clear;
        vm.user={};
        vm.minlength = 3;
        vm.funOk = funOk;
        vm.dateOpenStatus =  false;
        vm.setDpOpenStatus = setDpOpenStatus;

        function setDpOpenStatus(){
            vm.dateOpenStatus =! vm.dateOpenStatus;
        }
        function clear(){
            console.log("coming to clear");
            vm.user={};
        }

        vm.currentDate = new Date();
        vm.errorMessage = false;

        loadTable();
        function funOk() {
            console.log("------------------vm.user------------------");
            console.log(vm.user);
            if (vm.user.dob == null && vm.user.fname == null && vm.user.lname == null && vm.user.address == null) {
                console.log("coming to empty user");
                vm.errorMessage = true;
            }
            else {
                console.log("coming to exist user");
                vm.errorMessage = false;
                vm.tableParams.reload();
            }
        }
        function loadTable(){
            vm.tableParams = new NgTableParams({
                page: 1,
                count: 2
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
                            vm.users = response.data;
                            var filterObj = params.filter(), filteredData = $filter('filter')(vm.users, filterObj);
                            var postsData = $filter('orderBy')(filteredData, params.orderBy());
                            vm.data = postsData.slice((params.page() - 1) * params.count(), params.page() * params.count());
                            params.total(vm.users);
                            console.log("vm.data");
                            console.log(vm.data);
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
