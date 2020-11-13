class DuckduckgoPage {

    get inputSearch (): WebdriverIO.Element { return $('#search_form_input_homepage') }

    get btnSearch (): WebdriverIO.Element { return $('#search_button_homepage') }

    searchFor (value: string): void {
        this.inputSearch.setValue(value);
    }

    findResultElementByLink (link: string): WebdriverIO.Element  {
        let resultLinks = $('.results--main').$$('.result__url')

        const resultElementByLink = resultLinks.find(el => el.getAttribute('href')===link);
        if (typeof(resultElementByLink) == 'undefined') {
            throw new Error(`[Table] Row was not found by predicate`);
        }
        return resultElementByLink;
    }

    findResultElementByIndex (index: number): WebdriverIO.Element {
        const resultLinks = $('#links')
        return resultLinks.$$('div .result')[index].$('.result__url');
    }

    countNumberOfResultsOnPage(): number {
        const resultLinks = $('#links');
        return resultLinks.$$('div .results_links_deep').length;
    }

    open (): void {
        return browser.url('https://duckduckgo.com/');
    }
}

export = new DuckduckgoPage();
