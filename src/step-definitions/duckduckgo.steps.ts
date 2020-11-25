import { binding, then, when, given } from 'cucumber-tsflow';
import {DuckduckgoPage} from '../page-objects/duckduckgo.page';

@binding()
export class DuckduckgoPageSteps {

    duckduckgoPage = new DuckduckgoPage();

    @given(/^I open DuckDuckGo page$/)
    openDuckduckgoPage () {
        this.duckduckgoPage.open();
    };

    @when(/^I enter "([^"]*)" into search field$/)
    enterValInSearchStr (searchInput:string) {
        this.duckduckgoPage.searchFor(searchInput);
    };

    @when(/^I click on the Search button$/)
    clickOnSearchBtn () {
        this.duckduckgoPage.btnSearch.click();
    };

    @then(/^I see Clearmove site in the (\d+) place$/)
    seeCLSiteInPlace (place:number) {
        expect(this.duckduckgoPage.findResultElementByIndex((place-1))).toHaveHrefContaining("http://clearmove.com/");
    };

    @then(/^I see (\d+) results on the page$/)
    seeNResultsOnPage (nResults:number) {
        expect(this.duckduckgoPage.countNumberOfResultsOnPage()).toEqual(nResults)
    };
}
