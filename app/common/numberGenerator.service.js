(function() {
    angular
    .module('myApp.service.numberGenerator')
    .factory('numberGeneratorService', NumberGeneratorService);

    NumberGeneratorService.$inject = [];

    function NumberGeneratorService() {

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