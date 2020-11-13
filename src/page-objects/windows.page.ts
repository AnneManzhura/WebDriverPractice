import {Page} from './page';

class WindowsPage extends Page {
    page = new Page();

    get btnClick(): WebdriverIO.Element {return $(".example a")}

    get textHeader(): WebdriverIO.Element {return $(".example h3")}

    open (): void {
        return this.page.open('windows');
    }
}

export = new WindowsPage();