import { binding, then, when, given } from 'cucumber-tsflow';
import {TablesPage} from '../page-objects/tables.page';
import * as moment from 'moment';
import {TablePageContext} from "./tables.context";


@binding([TablePageContext])
export class TablesPageSteps {

    constructor(private tablePageContext: TablePageContext) {}

    tablesPage = new TablesPage();

    @when(/^I open Tables page$/)
    openTablesPage () {
        this.tablesPage.open();
    };

    @when(/^I do some action to the table$/)
    doSomeActionToTable () {
        const curTime = moment();
        const startTimeFirstHalfDay = moment("8:00am", 'h:mma');
        const endTimeFirstHalfDay = moment("3:00pm", 'h:mma');

        this.tablePageContext.firstHalfDayBool = curTime.isAfter(startTimeFirstHalfDay) && curTime.isBefore(endTimeFirstHalfDay);

        if (this.tablePageContext.firstHalfDayBool) {
            const changedRow = this.tablesPage.getRowByEmail('jdoe@hotmail.com');
            this.tablesPage.getEditBtnByRow(changedRow).click();
        } else {
            const changedRow = this.tablesPage.getRowByWebsite('http://www.jsmith.com');
            this.tablesPage.getDeleteBtnByRow(changedRow).click();
        }
    };

    @then(/^I see that changed row is the right one$/)
    seeChangedRowIsRightOne () {
        if (this.tablePageContext.firstHalfDayBool) {
            expect(browser.getUrl().split('#')[1]).toEqual('edit')
        } else {
            expect(browser.getUrl().split('#')[1]).toEqual('delete')
        }
    };

    @then(/^I see that number of items with price <= "(\d+)" is "(\d+)"$/)
    seeNItemsIsCorrect (value:number, num:number) {
        const results = this.tablesPage.rows.filter((row: WebdriverIO.Element) => parseFloat(this.tablesPage.getDuesByRow(row).getText().substring(1)) <= value);

        expect(results.length).toEqual(num);
    };


}
