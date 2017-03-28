/**
 * Created by shravya on 28/3/17.
 */
(function () {
    angular.module('searchMe.home')
        .controller("homeController", homeController);

    homeController.$inject = ['$http', 'homeService', '$rootScope', '$state', 'NgTableParams', '$filter'];

    function homeController($http, homeService, $rootScope, $state, NgTableParams, $filter) {
        var vm = this;
        vm.user={};
        vm.funOk = funOk;

        function funOk(){
            console.log(vm.user.fname);
            var query = {
                firstName : vm.user.fname,
                lastName : vm.user.lname,
                dateOfBirth : vm.user.dob,
                address : vm.user.address
            };
            homeService.getUserDetails(query).then(success).catch(failure);
            function success(response) {
                console.log(response.data);
                vm.users = response.data;
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
        }
    }
})();