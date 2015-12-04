(function () {
    angular.module('myApp')
        .controller('AppCtrl', AppController);

    AppController.$inject = ['$log', '$state', '$rootScope', '$scope', '$location'];

    function AppController($log, $state, $rootScope, $scope, $location) {
        vm = this;
        vm.appTitle = "Angular 1 and Echonest";
    };
})();

