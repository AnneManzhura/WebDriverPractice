import {Page} from './page';

class HoversPage extends Page {
    page = new Page();

    get subUrl (): string { return 'hovers'}

    getElementByIndex (index: number): WebdriverIO.Element {
        return $('.example').$$('div .figure')[index];
    }

    getLinkByIndex (index: number): WebdriverIO.Element {
        return $('.example').$$('div .figure')[index].$('a');
    }

    open (): void {
        return this.page.open('hovers');
    }
}
export = new HoversPage();