"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var page_1 = require("./page");
var TablesPage = /** @class */ (function (_super) {
    __extends(TablesPage, _super);
    function TablesPage() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.page = new page_1.Page();
        return _this;
    }
    Object.defineProperty(TablesPage.prototype, "table", {
        get: function () { return $('#table2'); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TablesPage.prototype, "rows", {
        get: function () { return this.table.$('tbody').$$('tr'); },
        enumerable: false,
        configurable: true
    });
    TablesPage.prototype.getEmailByRow = function (row) { return row.$('.email'); };
    TablesPage.prototype.getWebsiteByRow = function (row) { return row.$('.web-site'); };
    TablesPage.prototype.getFirstNameByRow = function (row) { return row.$('.first-name'); };
    TablesPage.prototype.getLastNameByRow = function (row) { return row.$('.last-name'); };
    TablesPage.prototype.getDuesByRow = function (row) { return row.$('.dues'); };
    TablesPage.prototype.getDeleteBtnByRow = function (row) { return row.$('.action').$('a[href*="delete"]'); };
    TablesPage.prototype.getEditBtnByRow = function (row) { return row.$('.action').$('a[href*="edit"]'); };
    TablesPage.prototype.getRowByEmail = function (email) {
        return this.getRowByCellText('.email', email);
    };
    TablesPage.prototype.getRowByWebsite = function (website) {
        return this.getRowByCellText('.web-site', website);
    };
    TablesPage.prototype.getRowByCellText = function (cellLocator, expectedCellText) {
        return this.findRowByPredicate(function (row) {
            var text = row.$(cellLocator).getText();
            return text.toLowerCase() === expectedCellText.toLowerCase();
        });
    };
    TablesPage.prototype.findRowByPredicate = function (predicate) {
        var rowByPredicate = this.rows.find(predicate);
        if (typeof (rowByPredicate) == 'undefined') {
            throw new Error("[Table] Row was not found by predicate");
        }
        return rowByPredicate;
    };
    TablesPage.prototype.open = function () {
        return this.page.open('tables');
    };
    return TablesPage;
}(page_1.Page));
module.exports = new TablesPage();
