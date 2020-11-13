import {Page} from './page';

class DropDownPage extends Page {
    page = new Page();

    get dropdown (): WebdriverIO.Element { return $('#dropdown')}

    get selectedOption (): WebdriverIO.Element {
        const drDn = this.dropdown
        return drDn.$(`[selected="selected"]`)
    }

    selectOptionByValue (option: string): void {
        const drDn = this.dropdown
        drDn.selectByAttribute('value', option);
    }

    getOptionByValue (val: string): WebdriverIO.Element {
        const drDn = this.dropdown
        return drDn.$(`[value="${val}"]`)
    }

    open (): void {
        return this.page.open('dropdown');
    }
}
export = new DropDownPage();