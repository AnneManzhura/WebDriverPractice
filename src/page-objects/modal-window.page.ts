import {Page} from './page';

class ModalWindowPage extends Page {
    page = new Page();

    get modalWindow(): WebdriverIO.Element { return $('#modal')}

    get btnClose(): WebdriverIO.Element {return $('.modal-footer')}

    get btnClickHere(): WebdriverIO.Element {return $('#restart-ad')}

    get modalWindowBody(): WebdriverIO.Element {return $('.modal-body')}

    get modalWindowTitle(): WebdriverIO.Element {return $('.modal-title')}

    open (): void {
        return this.page.open('entry_ad');
    }
}
export = new ModalWindowPage();