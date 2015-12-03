(function () {

    angular.module('myApp.numbers')
    .controller('NumberCtrl',  NumberController);

    NumberController.$inject = ['numberGeneratorService'];

    function NumberController(numberGeneratorService) {

        vm = this;

        //API
        vm.lastNumber = 0;
        vm.currentNumber = 0;

        vm.updateNumber = updateNumber;

        return vm;
        
        // Implementation Details

        function updateNumber () {
            vm.lastNumber = vm.currentNumber;
            vm.currentNumber = numberGeneratorService.generateNumber();
        }


    };

})();