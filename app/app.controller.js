(function () {
    angular.module('myApp')
        .controller('AppCtrl', AppController);

    AppController.$inject = ['$log', '$state', '$rootScope', '$scope', '$location', 'favstoreService'];

    function AppController($log, $state, $rootScope, $scope, $location, favstoreService) {
        vm = this;
        vm.appTitle = "Angular 1 and Echonest";
        vm.newArtists = [];


        $scope.$watchCollection(function () {
        	return favstoreService.favourites;
        }, 
        function(newVal) {
        	vm.newArtists = newVal;
        }, true);
    };

})();

