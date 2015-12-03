(function () {
    angular.module('myApp.numbers')
        .config(['$stateProvider', function config($stateProvider) {
            $stateProvider.state('numbers', {
                url: '/number-generator',
                views: {
                    "main": {
                        controller: 'NumberCtrl as numberCtrl',
                        templateUrl: 'numbers/numbers.tpl.html'
                    }
                },
                data: {pageTitle: 'Numbers'}
            });
        }])
})();