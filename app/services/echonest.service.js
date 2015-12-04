(function() {
    angular
    .module('myApp.service.echonest')
    .factory('echonestService', EchonestService);

    EchonestService.$inject = [];

    function EchonestService() {

        var numberGenService = {
            generateNumber: generateNumber
        };

        return numberGenService;

        // Implementation Details

        function generateNumber() {
            return Math.random();
        };
    }
})();