"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var cucumber_1 = require("cucumber");
var DropDownPage = require('../page-objects/dropdown.page');
cucumber_1.Given(/^I open Dropdown page$/, function () {
    DropDownPage.open();
});
cucumber_1.Then(/^I see disabled option initially selected$/, function () {
    expect(DropDownPage.selectedOption.getAttribute('disabled')).toBe('true');
});
cucumber_1.When(/^I select (.*) from dropdown$/, function (value) {
    DropDownPage.selectOptionByValue(value);
});
cucumber_1.Then(/^I see (.*) value selected$/, function (text) {
    expect(DropDownPage.selectedOption.getText()).toEqual(text);
});
