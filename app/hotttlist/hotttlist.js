(function () {

    angular.module('myApp.hotttlist')
        .controller('HotttCtrl',  HotttController);

    HotttController.$inject = [];

    function HotttController() {

        vm = this;
        vm.listTitle = 'Echonest\'s hotttest artists';

    };
})();