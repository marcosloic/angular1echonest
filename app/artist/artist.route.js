(function () {
    angular.module('myApp.artist')
        .config(['$stateProvider', function config($stateProvider) {
            $stateProvider.state('artist', {
                url: '/artist/:name',
                views: {
                    "main": {
                        controller: 'ArtistCtrl as artistCtrl',
                        templateUrl: 'artist/artist.tpl.html'
                    }
                },
            });
        }])
})();