/**
 * Created by shravya on 28/3/17.
 */
(function () {
    angular.module('searchMe.home')
        .service("homeService", homeService);


    homeService.$inject = ['$http', 'api', '$q', '$rootScope'];

    function homeService($http, api, $q, $rootScope) {
        var homeService = {
            getUserDetails: getUserDetails
        };
        return homeService;

        function getUserDetails(query) {
            console.log(query)
            return api.getUserDetails({q:query}).$promise;
        }

    }
})();
