"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var cucumber_1 = require("cucumber");
var WindowsPage = require('../page-objects/windows.page');
var origPageHandle, newPageHandle, origUrl;
cucumber_1.Given(/^I open Window page$/, function () {
    WindowsPage.open();
    origPageHandle = browser.getWindowHandle();
    origUrl = browser.getUrl();
});
cucumber_1.When(/^I click on Click here button$/, function () {
    WindowsPage.btnClick.click();
});
cucumber_1.Then(/^I see New Window page open$/, function () {
    var urlToBe = origUrl + '/new';
    var handles = browser.getWindowHandles();
    var newHandles = handles.filter(function (handle) { return handle !== origPageHandle; });
    browser.switchToWindow(newHandles[0]);
    newPageHandle = browser.getWindowHandle();
    expect(browser).toHaveUrl(urlToBe);
});
cucumber_1.Then(/^I see "([^"]*)" text on the New Window page$/, function (text) {
    expect(WindowsPage.textHeader.getText()).toEqual(text);
});
cucumber_1.When(/^I close the New Window$/, function () {
    browser.closeWindow();
    browser.switchToWindow(origPageHandle);
});
cucumber_1.Then(/^I see "([^"]*)" text in the previous Window$/, function (text) {
    expect(WindowsPage.textHeader.getText()).toEqual(text);
});
cucumber_1.When(/^I switch to the previous window$/, function () {
    browser.switchToWindow(origPageHandle);
});
