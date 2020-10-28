const { Before, Given, When, Then } = require('cucumber');
const DuckduckgoPage = require('../page-objects/duckduckgo.page');

Given(/^I open DuckDuckGo page$/, function () {
    DuckduckgoPage.open();
});
When(/^I enter "([^"]*)" into search field$/, function (searchInput) {
    DuckduckgoPage.searchFor(searchInput);
});
When(/^I click on the Search button$/, function () {
    DuckduckgoPage.btnSearch.click();
});
Then(/^I see Clearmove site in the (\d+) place$/, function (place) {
    expect(DuckduckgoPage.findResultElementByIndex((place-1))).toHaveHrefContaining("http://clearmove.com/");
});
Then(/^I see (\d+) results on the page$/, function (nResults) {
    expect(DuckduckgoPage.countNumberOfResultsOnPage()).toEqual(nResults)
});