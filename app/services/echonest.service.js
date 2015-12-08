(function() {
    angular
    .module('myApp.service.echonest')
    .factory('echonestService', EchonestService);

    EchonestService.$inject = ['$http'];

    function EchonestService($http) {


        var url = 'http://developer.echonest.com/api/v4/';
        var apiKey = 'AAXIWZI0HTK1NYTWQ';
        var format = 'json';

        var echonestService = {
            topHot: topHot,
            getArtistData: getArtistData,
            artistSearch: artistSearch,
            getArtistBio: getArtistBio
        };

        return echonestService;

        function topHot() {
            var endpoint = 'artist/top_hottt?';
            var queryUrl = url + endpoint + '&api_key=' + apiKey + '&format=' + format + '&results=15&start=0&bucket=hotttnesss';
            return $http.get(queryUrl).then(function(response) {
                return response.data.response.artists
            });
        }

        function getArtistData(name) {
            var endpoint = 'artist/profile?';
            var queryUrl = url + endpoint + '&api_key=' + apiKey + '&name=' + name + '&format=' + format + '&bucket=blogs&bucket=images&bucket=genre&bucket=reviews&bucket=news';
            return $http.get(queryUrl).then(function(response) {
                return response.data.response.artist
            });
        }


        function artistSearch(name) {
            var endpoint = 'artist/suggest?';
            var queryUrl = url + endpoint + '&api_key=' + apiKey + '&results=6' + '&name=' + name + '&format=' + format;
            return $http.get(queryUrl);
        }

        function getArtistBio(name) {
            var endpoint = 'artist/biographies?';
            var queryUrl = url + endpoint + '&api_key=' + apiKey + '&name=' + name + '&format=' + format + '&results=1&start=6';
            return $http.get(queryUrl).then(function(response) {
                return response.data.response.biographies[0]
            });
        }

    }
})();