(function () {
    angular.module('myApp.hotttlist')
        .config(['$stateProvider', function config($stateProvider) {
            $stateProvider.state('hotttlist', {
                url: '/hotttlist',
                views: {
                    "main": {
                        controller: 'HotttCtrl as hotttCtrl',
                        templateUrl: 'hotttlist/hotttlist.tpl.html'
                    }
                },
            });
        }])
})();