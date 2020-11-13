"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var cucumber_1 = require("cucumber");
var TablesPage = require('../page-objects/tables.page');
var moment = require('moment');
var changedRow, firstHalfDayBool;
cucumber_1.When(/^I open Tables page$/, function () {
    TablesPage.open();
});
cucumber_1.When(/^I do some action to the table$/, function () {
    var curTime = moment();
    var startTimeFirstHalfDay = moment("8:00am", 'h:mma');
    var endTimeFirstHalfDay = moment("3:00pm", 'h:mma');
    firstHalfDayBool = curTime.isAfter(startTimeFirstHalfDay) && curTime.isBefore(endTimeFirstHalfDay);
    if (firstHalfDayBool) {
        changedRow = TablesPage.getRowByEmail('jdoe@hotmail.com');
        TablesPage.getEditBtnByRow(changedRow).click();
    }
    else {
        changedRow = TablesPage.getRowByWebsite('http://www.jsmith.com');
        TablesPage.getDeleteBtnByRow(changedRow).click();
    }
});
cucumber_1.Then(/^I see that changed row is the right one$/, function () {
    if (firstHalfDayBool) {
        expect(TablesPage.getLastNameByRow(changedRow).getText()).toEqual("Doe");
        expect(browser.getUrl().split('#')[1]).toEqual('edit');
    }
    else {
        expect(TablesPage.getLastNameByRow(changedRow).getText()).toEqual("Smith");
        expect(browser.getUrl().split('#')[1]).toEqual('delete');
    }
});
cucumber_1.Then(/^I see that number of items with price <= "(\d+)" is "(\d+)"$/, function (value, num) {
    var results = TablesPage.rows.filter(function (row) { return parseFloat(TablesPage.getDuesByRow(row).getText().substring(1)) <= value; });
    expect(results.length).toEqual(num);
});
