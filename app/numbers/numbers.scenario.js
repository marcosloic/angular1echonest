/* https://github.com/angular/protractor/blob/master/docs/getting-started.md */

describe('my app', function() {

    browser.get('index.html');

    beforeEach(function() {
        browser.get('index.html#/number-generator');
    });


    it('should render our number generation page', function() {

        var firstNumberElement = element.all(by.css('h2')).first();

        expect(firstNumberElement.getText()).toMatch("My current number is: 0");

        var secondNumberElement = element.all(by.css('h2')).get(1);

        expect(secondNumberElement.getText()).toMatch("My last number was: 0");


    });

});