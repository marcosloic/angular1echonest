/* https://github.com/angular/protractor/blob/master/docs/getting-started.md */

describe('my app', function() {

    browser.get('index.html');

    beforeEach(function() {
        browser.get('index.html#/hotttlist');
    });


    it('should render hotttlist when user navigates to /hotttlist', function() {
        expect(element.all(by.css('h2')).first().getText()).
        toMatch("Echonest's hotttest artists");
    });

});