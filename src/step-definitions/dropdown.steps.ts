import {Given, When, Then}  from 'cucumber';
const DropDownPage = require('../page-objects/dropdown.page');


Given(/^I open Dropdown page$/, function () {
    DropDownPage.open();
});

Then(/^I see disabled option initially selected$/, function () {
    expect(DropDownPage.selectedOption.getAttribute('disabled')).toBe('true');
});

When(/^I select (.*) from dropdown$/, function (value:string) {
    DropDownPage.selectOptionByValue(value);
});

Then(/^I see (.*) value selected$/, function (text:string) {
    expect(DropDownPage.selectedOption.getText()).toEqual(text);
});