/**
 * Created by shravya on 28/3/17.
 */
(function () {
    angular.module('searchMe.home')
        .component('headerDirective', {

            bindings: {},
            templateUrl: 'partials/header.html',
            controller: headerController,
            controllerAs: 'h'
        });
    headerController.$inject = [];
    function headerController() {
        var vm = this;

    }
}());
