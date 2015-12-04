(function () {

    angular.module('myApp.artist')
        .controller('ArtistCtrl',  ArtistController);

    ArtistController.$inject = ['$stateParams'];

    function ArtistController($stateParams) {

        vm = this;
        vm.title = 'Artists';
        console.log($stateParams);

    };
})();