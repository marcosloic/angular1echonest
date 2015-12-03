describe('numbers section', function () {

    beforeEach(module('myApp.numbers'));

    describe('Number Controller', function () {

        var $controller;

        beforeEach(inject(function (_$controller_) {
            // The injector unwraps the underscores (_) from around the parameter names when matching
            $controller = _$controller_;
        }));

        it('should be able to generate new numbers and retail the last number', function () {
            var scope = {};
            var numberCtrl = $controller('NumberCtrl ', {$scope: scope});
            expect(numberCtrl).toBeDefined();
            expect(numberCtrl.currentNumber).toBe(0);
            expect(numberCtrl.lastNumber).toBe(0);

            numberCtrl.updateNumber();

            expect(numberCtrl.currentNumber).not.toBe(0);     
            expect(numberCtrl.lastNumber).toBe(0);

            var oldCurrentNumber = numberCtrl.currentNumber;

            numberCrl.updateNumber();

            expect(numberCtrl.currentNumber).not.toBe(0);
            expect(numberCtrl.lastNumber).toBe(oldCurrentNumber);


        });
    });
});

