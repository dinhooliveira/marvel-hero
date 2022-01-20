describe('Hero Application', function() {

      
    it('should redirect `index.html` to `index.html#!/home', function() {
        browser.get('index.html');
        expect(browser.getCurrentUrl()).toContain('index.html#!/home');
    });
});