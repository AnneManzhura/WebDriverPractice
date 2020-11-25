import { binding, then, when, given } from 'cucumber-tsflow';
import {WindowsPage} from '../page-objects/windows.page';
import {WindowsPageContext} from "./windows.context";


@binding([WindowsPageContext])
export class WindowsPageSteps {
    windowsPage = new WindowsPage();

    constructor(private windowsPageContext: WindowsPageContext) {}

    @given(/^I open Window page$/)
    openWindowsPage () {
        this.windowsPage.open();
        this.windowsPageContext.origPageHandle = browser.getWindowHandle();
        this.windowsPageContext.origUrl = browser.getUrl();
    };

    @when(/^I click on Click here button$/)
    clickOnClickHereBtn () {
        this.windowsPage.btnClick.click();
    };

    @then(/^I see New Window page open$/)
    seeNewWindowOpened () {
        const urlToBe = this.windowsPageContext.origUrl + '/new';
        const handles = browser.getWindowHandles();
        const newHandles = handles.filter(handle => handle !== this.windowsPageContext.origPageHandle);

        browser.switchToWindow(newHandles[0])
        this.windowsPageContext.newPageHandle = browser.getWindowHandle();

        expect(browser).toHaveUrl(urlToBe);
    };

    @then(/^I see "([^"]*)" text on the New Window page$/)
    seeTextOnNewWindow (text: string) {
        expect(this.windowsPage.textHeader.getText()).toEqual(text)
    };

    @when(/^I close the New Window$/)
    closeNewWindow () {
        browser.closeWindow();
        browser.switchToWindow(this.windowsPageContext.origPageHandle);
    }

    @then(/^I see "([^"]*)" text in the previous Window$/)
    seeTextInWindow (text: string) {
        expect(this.windowsPage.textHeader.getText()).toEqual(text)
    };

    @when(/^I switch to the previous window$/)
    switchToPrevWindow () {
        browser.switchToWindow(this.windowsPageContext.origPageHandle)
    };


}

