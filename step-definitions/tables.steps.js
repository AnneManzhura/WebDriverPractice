const {When, Then} = require('cucumber');
const TablesPage = require('../page-objects/tables.page');
const moment = require('moment')
let changedRow, firstHalfDayBool;

When(/^I open Tables page$/, function () {
    TablesPage.open();
});

When(/^I do some action to the table$/, function () {
    const curTime = moment();
    const startTimeFirstHalfDay = moment("8:00am", 'h:mma');
    const endTimeFirstHalfDay = moment("3:00pm", 'h:mma');

    firstHalfDayBool = curTime.isAfter(startTimeFirstHalfDay) && curTime.isBefore(endTimeFirstHalfDay);

    if (firstHalfDayBool) {
        changedRow = TablesPage.getRowByEmail('jdoe@hotmail.com');
        TablesPage.getEditBtnByRow(changedRow).click();
    } else {
        changedRow = TablesPage.getRowByWebsite('http://www.jsmith.com');
        TablesPage.getDeleteBtnByRow(changedRow).click();
    }

});

Then(/^I see that changed row is the right one$/, function () {
    if (firstHalfDayBool) {
        expect(TablesPage.getLastNameByRow(changedRow).getText()).toEqual("Doe");
        expect(browser.getUrl().split('#')[1]).toEqual('edit')
    } else {
        expect(TablesPage.getLastNameByRow(changedRow).getText()).toEqual("Smith");
        expect(browser.getUrl().split('#')[1]).toEqual('delete')
    }
});

Then(/^I see that number of items with price <= "([^"]*)" is "([^"]*)"$/, function (value, num) {
    const results = TablesPage.rows.filter(row => parseFloat(TablesPage.getDuesByRow(row).getText().substring(1)) <= parseFloat(value));

    expect(results.length).toEqual(parseInt(num));
});
