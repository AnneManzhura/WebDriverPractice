const { Before, Given, When, Then } = require('cucumber');
const WindowsPage = require('../page-objects/windows.page');
let origPageHandle, newPagehandle, origUrl;

Given(/^I open Window page$/, function () {
    WindowsPage.open();
    origPageHandle = browser.getWindowHandle();
    origUrl = browser.getUrl();
});
When(/^I click on Click here button$/, function () {
    WindowsPage.btnClick.click();
});
Then(/^I see New Window page open$/, function () {
    const urlToBe = origUrl + '/new';
    let handles = browser.getWindowHandles();
    const newHandles = handles.filter(handle => handle !== origPageHandle);
    browser.switchToWindow(newHandles[0])
    newPagehandle = browser.getWindowHandle();
    expect(browser).toHaveUrl(urlToBe);
});
Then(/^I see "([^"]*)" text on the New Window page$/, function (text) {
    expect(WindowsPage.textHeader.getText()).toEqual(text)
});
When(/^I close the New Window$/, function () {
    browser.closeWindow();
    browser.switchToWindow(origPageHandle);
});
Then(/^I see "([^"]*)" text in the previous Window$/, function (text) {
    expect(WindowsPage.textHeader.getText()).toEqual(text)
});
When(/^I switch to the previous window$/, function () {
    browser.switchToWindow(origPageHandle)
});