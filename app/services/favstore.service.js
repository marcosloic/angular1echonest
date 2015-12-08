(function() {
    angular
    .module('myApp.service.favstore')
    .factory('favstoreService', Favstore);

    Favstore.$inject = [];

    function Favstore() {

        var vm = this;

        vm.favourites = [];

        var favstore = {
            getFavourites: getFavourites,
            addFavourite: addFavourite,
            deleteFavourite: deleteFavourite,
            updateFavourites: updateFavourites,
            favourites: vm.favourites,
            getNew: getNew
        };

        return favstore;

        function getFavourites() {
           return vm.favourites;
        }

        function addFavourite(artist) {
            vm.favourites.push({'name': artist, 'isNew': true});
        }

        function deleteFavourite(artist) {
            var index = vm.favourites.map(function(artistList) {
                return artistList.name;
            }).indexOf(artist);

            vm.favourites.splice(index, 1);
        }

        function updateFavourites() {
            vm.favourites.map(function(artist) {
                 return artist.isNew = false;
            })
        }

        function getNew() {
            return vm.favourites.map(function(artist) {
                return artist.isNew === true;
            })
        }

    }

})();