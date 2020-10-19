class DuckduckgoPage {

    get inputSearch () { return $('#search_form_input_homepage') }
    get btnSearch () { return $('#search_button_homepage') }

    searchFor (value) {
        this.inputSearch.setValue(value);
        browser.pause(1000);
        this.btnSearch.click();
    }

    findResult(index){
        const resultLinks = $('#links')
        return (resultLinks.$$('div .result')[index].$('.result__url'))
    }

    open () {
        return browser.url('https://duckduckgo.com/');
    }
}

module.exports = new DuckduckgoPage();
