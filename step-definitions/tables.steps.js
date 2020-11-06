const { When, Then } = require('cucumber');
const TablesPage = require('../page-objects/tables.page');
const moment = require('moment')
let changedRow, firstHalfDayBool;

When(/^I open Tables page$/, function () {
    TablesPage.open();
});
When(/^I do some action to the table$/, function () {
    let curTime = moment();
    let startTimeFirstHalfDay = moment("8:00am", 'h:mma');
    let endTimeFirstHalfDay= moment("3:00pm", 'h:mma');
    firstHalfDayBool = curTime.isAfter(startTimeFirstHalfDay) && curTime.isBefore(endTimeFirstHalfDay);
    if (firstHalfDayBool){
        changedRow = TablesPage.getRowByEmail('jdoe@hotmail.com');
        TablesPage.getEditBtnByRow(changedRow).click();
    }
    else {
        changedRow = TablesPage.getRowByWebsite('http://www.jsmith.com');
        TablesPage.getDeleteBtnByRow(changedRow).click();
    }
    browser.pause(1000); //to make sure right btn is clicked
});
Then(/^I see that changed row is the right one$/, function () {
    if (firstHalfDayBool){
        expect(TablesPage.getLastNameByRow(changedRow).getText()).toEqual("Doe");
    }
    else {
        expect(TablesPage.getLastNameByRow(changedRow).getText()).toEqual("Smith");
    }
});
Then(/^I see that number of items with price <= "([^"]*)" is "([^"]*)"$/, function (value, num) {
    let results = TablesPage.rows.filter(row => parseFloat(TablesPage.getDuesByRow(row).getText().substring(1))<=parseFloat(value));
    expect(results.length).toEqual(parseInt(num));
});
