"use strict";
var DuckduckgoPage = /** @class */ (function () {
    function DuckduckgoPage() {
    }
    Object.defineProperty(DuckduckgoPage.prototype, "inputSearch", {
        get: function () { return $('#search_form_input_homepage'); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DuckduckgoPage.prototype, "btnSearch", {
        get: function () { return $('#search_button_homepage'); },
        enumerable: false,
        configurable: true
    });
    DuckduckgoPage.prototype.searchFor = function (value) {
        this.inputSearch.setValue(value);
    };
    DuckduckgoPage.prototype.findResultElementByLink = function (link) {
        var resultLinks = $('.results--main').$$('.result__url');
        var resultElementByLink = resultLinks.find(function (el) { return el.getAttribute('href') === link; });
        if (typeof (resultElementByLink) == 'undefined') {
            throw new Error("[Table] Row was not found by predicate");
        }
        return resultElementByLink;
    };
    DuckduckgoPage.prototype.findResultElementByIndex = function (index) {
        var resultLinks = $('#links');
        return resultLinks.$$('div .result')[index].$('.result__url');
    };
    DuckduckgoPage.prototype.countNumberOfResultsOnPage = function () {
        var resultLinks = $('#links');
        return resultLinks.$$('div .results_links_deep').length;
    };
    DuckduckgoPage.prototype.open = function () {
        return browser.url('https://duckduckgo.com/');
    };
    return DuckduckgoPage;
}());
module.exports = new DuckduckgoPage();
