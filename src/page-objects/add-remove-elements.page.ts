import {Page} from './page';

class AddRemoveElementsPage extends Page {
    page = new Page();

    get btnAdd (): WebdriverIO.Element { return $('.example > button') }

    get btnsRemove (): WebdriverIO.Element { return $('#elements') }

    getBtnRemove (index: number): WebdriverIO.Element {
        const btnsRemove = $('#elements')
        return btnsRemove.$$('button.added-manually')[index];
    }

    open (): void {
        return this.page.open('add_remove_elements/');
    }
}

export = new AddRemoveElementsPage();