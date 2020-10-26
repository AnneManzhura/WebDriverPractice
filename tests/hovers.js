const HoversPage = require('../page-objects/hovers.page');

describe('Hovers page', () => {

    before('opens HoversPage',function() {
        HoversPage.open();
    });

    it('hovers over third element and clicks to view profile', () => {
        const index = 2;
        const urlToBe = browser.getUrl().replace(HoversPage.subUrl, "") + 'users/'+ (index+1);
        HoversPage.getElementByIndex(index.toString()).moveTo();
        HoversPage.getLinkByIndex(index.toString()).waitForDisplayed();
        HoversPage.getLinkByIndex(index.toString()).click();
        expect(browser).toHaveUrl(urlToBe);
    })

})