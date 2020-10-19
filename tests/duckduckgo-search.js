const DuckduckgoPage = require('../page-objects/duckduckgo.page');

describe('Duckduckgo search', () => {

    it('finds Clearmove site in the first place', () => {
        DuckduckgoPage.open();
        DuckduckgoPage.searchFor('Clearmove')
        expect(DuckduckgoPage.findResult(0)).toHaveHrefContaining("http://clearmove.com/")
    })

    it('finds Clearmove LinkedIn in the third place', () => {
        expect(DuckduckgoPage.findResult(2)).toHaveHrefContaining("https://www.linkedin.com/company/clearmove")
    })

    it('finds Clearmove Crunchbase in the fourth place', () => {
        expect(DuckduckgoPage.findResult(3)).toHaveHrefContaining("https://www.crunchbase.com/organization/clearmove")
    })

    it('finds links ', () => {

        expect(DuckduckgoPage.findLink("http://clearmove.com/")).toBePresent();
    })


})