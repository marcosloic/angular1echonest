(function () {

    angular.module('myApp.hotttlist')
        .controller('HotttCtrl',  HotttController);

    HotttController.$inject = ['echonestService'];

    function HotttController(echonestService) {
        vm = this;
        vm.listTitle = 'Echonest\'s hotttest artists';

        echonestService.topHot().then(function(response) {
        	vm.artists = response
        });
    };
})();