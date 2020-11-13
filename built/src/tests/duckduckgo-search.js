"use strict";
var DuckduckgoPage = require('../page-objects/duckduckgo.page');
describe('Duckduckgo search', function () {
    before('opens DuckDuckGo and searches for Clearmove', function () {
        DuckduckgoPage.open();
        DuckduckgoPage.searchFor('Clearmove');
    });
    it('finds Clearmove site in the first place', function () {
        expect(DuckduckgoPage.findResultElementByIndex(0)).toHaveHrefContaining("https://clearmove.com/");
    });
    it('finds Clearmove LinkedIn in the third place', function () {
        expect(DuckduckgoPage.findResultElementByIndex(2)).toHaveHrefContaining("https://www.linkedin.com/company/clearmove");
    });
    it('finds Clearmove Crunchbase in the fourth place', function () {
        expect(DuckduckgoPage.findResultElementByIndex(3)).toHaveHrefContaining("https://www.crunchbase.com/organization/clearmove");
    });
    it('finds Clearmove site on the first page of results ', function () {
        expect(DuckduckgoPage.findResultElementByLink("https://clearmove.com/")).toBePresent();
    });
});
