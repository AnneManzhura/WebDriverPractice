"use strict";
var HoversPage = require('../page-objects/hovers.page');
describe('Hovers page', function () {
    before('opens HoversPage', function () {
        HoversPage.open();
    });
    it('hovers over third element and clicks to view profile', function () {
        var index = 2;
        var urlToBe = browser.getUrl().replace(HoversPage.subUrl, "") + 'users/' + (index + 1);
        HoversPage.getElementByIndex(index.toString()).moveTo();
        HoversPage.getLinkByIndex(index.toString()).waitForDisplayed();
        HoversPage.getLinkByIndex(index.toString()).click();
        expect(browser).toHaveUrl(urlToBe);
    });
});
