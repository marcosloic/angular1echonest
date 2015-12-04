(function () {

    angular.module('myApp.artist')
        .controller('ArtistCtrl',  ArtistController);

    ArtistController.$inject = ['$stateParams', 'echonestService'];

    function ArtistController($stateParams, echonestService) {

        vm = this;
        vm.name = $stateParams.name;

        echonestService.getArtistData(vm.name).then(function(response) {
        	vm.artist = response;
        	console.log(response);
        });

        echonestService.getArtistBio(vm.name).then(function(response) {
        	vm.biography = response;
        })

    };
})();