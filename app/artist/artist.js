(function () {

    angular.module('myApp.artist')
    .controller('ArtistCtrl',  ArtistController);

    ArtistController.$inject = ['$stateParams', 'echonestService', 'favstoreService'];

    function ArtistController($stateParams, echonestService, favstoreService) {

        vm = this;
        vm.name = $stateParams.name;
        vm.news = true;
        vm.reviews = true;
        vm.toggle = toggle;
        vm.addFavourite = addFavourite;
        vm.deleteFavourite = deleteFavourite;

        getArtistData(vm.name);
        getArtistBio(vm.name);
        isFavourite();


        function toggle(name) {
        	vm[name] = !vm[name];
        }

        function isFavourite() {
            vm.isFavourite = favstoreService.getFavourites().find(function(artist) {
                return artist.name === vm.name;
            })
        }

        function getArtistData(name) {
             echonestService.getArtistData(name).then(function(response) {
              vm.artist = response;
            })
        }

        function getArtistBio(name) {
             echonestService.getArtistBio(name).then(function(response) {
              vm.biography = response;
            })
        }

        function addFavourite(artist) {
            favstoreService.addFavourite(artist);
            vm.isFavourite = !vm.isFavourite;
        }

        function deleteFavourite(artist) {
            favstoreService.deleteFavourite(artist);
            vm.isFavourite = !vm.isFavourite;
        }

};
})();