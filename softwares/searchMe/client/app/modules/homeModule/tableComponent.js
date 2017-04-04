/**
 * Created by shravya on 28/3/17.
 */
(function () {
    angular.module('searchMe.home')
        .component('tableComponent', {

            bindings: {
                tableParams: '=',
                data : '='
            },
            templateUrl: 'partials/table.html',
            controller: tableController,
            controllerAs: 'tc'
        });
    tableController.$inject = [];
    function tableController() {
        var vm = this;

    }
}());