(function () {
    angular.module('myApp.favourites')
        .config(['$stateProvider', function config($stateProvider) {
            $stateProvider.state('favourites', {
                url: '/favourites',
                views: {
                    "main": {
                        controller: 'FavouritesCtrl as favouritesCtrl',
                        templateUrl: 'favourites/favourites.tpl.html'
                    }
                },
            });
        }])
})();