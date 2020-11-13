"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var cucumber_1 = require("cucumber");
var DuckduckgoPage = require('../page-objects/duckduckgo.page');
cucumber_1.Given(/^I open DuckDuckGo page$/, function () {
    DuckduckgoPage.open();
});
cucumber_1.When(/^I enter "([^"]*)" into search field$/, function (searchInput) {
    DuckduckgoPage.searchFor(searchInput);
});
cucumber_1.When(/^I click on the Search button$/, function () {
    DuckduckgoPage.btnSearch.click();
});
cucumber_1.Then(/^I see Clearmove site in the (\d+) place$/, function (place) {
    expect(DuckduckgoPage.findResultElementByIndex((place - 1))).toHaveHrefContaining("http://clearmove.com/");
});
cucumber_1.Then(/^I see (\d+) results on the page$/, function (nResults) {
    expect(DuckduckgoPage.countNumberOfResultsOnPage()).toEqual(nResults);
});
