const { Before, Given, When, Then } = require('cucumber');
const DropDownPage = require('../page-objects/dropdown.page');


Given(/^I open Dropdown page$/, function () {
    DropDownPage.open();
});

Then(/^I see disabled option initially selected$/, function () {
    expect(DropDownPage.selectedOption.getAttribute('disabled')).toBe('true');
});

When(/^I select (.*) from dropdown$/, function (value) {
    DropDownPage.selectOptionByValue(value);
});

Then(/^I see (.*) value selected$/, function (text) {
    expect(DropDownPage.selectedOption.getText()).toEqual(text);
});