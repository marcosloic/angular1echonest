describe('hotttlist section', function () {

    beforeEach(module('myApp.hotttlist'));

    describe('Hottt Controller', function () {

        var $controller;

        beforeEach(inject(function (_$controller_) {
            // The injector unwraps the underscores (_) from around the parameter names when matching
            $controller = _$controller_;
        }));

        it('should provide simple access to its title', function () {
            var scope = {};
            var hotttCtrl = $controller('HotttCtrl', {$scope: scope});

            expect(hotttCtrl).toBeDefined();
            expect(hotttCtrl.listTitle).toBeDefined();

            expect(hotttCtrl.listTitle).toBe('Echonest\'s hotttest artists');
        });
    });
});

