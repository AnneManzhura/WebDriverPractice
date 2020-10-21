const DuckduckgoPage = require('../page-objects/duckduckgo.page');

describe('Duckduckgo search', () => {

    before('opens DuckDuckGo and searches for Clearmove',function() {
        DuckduckgoPage.open();
        DuckduckgoPage.searchFor('Clearmove');
    });

    it('finds Clearmove site in the first place', () => {
        expect(DuckduckgoPage.findResultElementByIndex(0)).toHaveHrefContaining("https://clearmove.com/");
    })

    it('finds Clearmove LinkedIn in the third place', () => {
        expect(DuckduckgoPage.findResultElementByIndex(2)).toHaveHrefContaining("https://www.linkedin.com/company/clearmove");
    })

    it('finds Clearmove Crunchbase in the fourth place', () => {
        expect(DuckduckgoPage.findResultElementByIndex(3)).toHaveHrefContaining("https://www.crunchbase.com/organization/clearmove");
    })

    it('finds Clearmove site on the first page of results ', () => {
        expect(DuckduckgoPage.findResultElementByLink("https://clearmove.com/")).toBePresent();
    })


})