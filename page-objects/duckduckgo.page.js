class DuckduckgoPage {

    get inputSearch () { return $('#search_form_input_homepage') }
    get btnSearch () { return $('#search_button_homepage') }


    searchFor (value) {
        this.inputSearch.setValue(value);
    }

    findResultElementByLink (link) {
        let resultLinks = $('.results--main').$$('.result__url')
        return (resultLinks.find(el => el.getAttribute('href')===link))
    }

    findResultElementByIndex (index) {
        const resultLinks = $('#links')
        return (resultLinks.$$('div .result')[index].$('.result__url'))
    }

    countNumberOfResultsOnPage(){
        const resultLinks = $('#links');
        return (resultLinks.$$('div .results_links_deep')).length
    }

    open () {
        return browser.url('https://duckduckgo.com/');
    }
}

module.exports = new DuckduckgoPage();
