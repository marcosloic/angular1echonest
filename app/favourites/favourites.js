(function () {

    angular.module('myApp.favourites')
        .controller('FavouritesCtrl',  FavouritesController);

    FavouritesController.$inject = ['favstoreService'];

    function FavouritesController(favstoreService) {
        vm = this;
        vm.listTitle = 'My favourite artists';
        vm.favourites;

        getFavourites();
        markAsOld();

        function getFavourites() {
        	vm.favourites = favstoreService.getFavourites();
        }

        function markAsOld() {
        	favstoreService.updateFavourites();
        }
    };
})();