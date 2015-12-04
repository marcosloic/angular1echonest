(function () {

    angular.module('myApp.artist')
        .controller('ArtistCtrl',  ArtistController);

    ArtistController.$inject = ['$stateParams', 'echonestService'];

    function ArtistController($stateParams, echonestService) {

        vm = this;
        vm.name = $stateParams.name;
        vm.artist;
        vm.biography;

        getArtistData(vm.name);
        getArtistBio(vm.name);


        function getArtistData(name) {
	        echonestService.getArtistData(name).then(function(response) {
	        	vm.artist = response
	        	console.log(response)
	        })
    	}

    	function getArtistBio(name) {
	        echonestService.getArtistBio(name).then(function(response) {
	        	vm.biography = response
	        })
    	}

    };
})();