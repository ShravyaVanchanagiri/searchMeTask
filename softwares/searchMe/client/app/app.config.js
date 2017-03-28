/**
 * Created by shravya on 28/3/17.
 */
(function () {
    angular.module("searchMe")
        .config(function ($stateProvider, $locationProvider, $urlRouterProvider) {
            console.log("from config");

            //$locationProvider.html5Mode(true);

            $stateProvider.state('home', {
                url: '/home',
                templateUrl: 'partials/home.html',
                controller: 'homeController',
                controllerAs: 'hc'
            })

            $urlRouterProvider.otherwise('/home');

        })
})();