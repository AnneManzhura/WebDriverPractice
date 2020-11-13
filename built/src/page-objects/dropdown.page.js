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
var DropDownPage = /** @class */ (function (_super) {
    __extends(DropDownPage, _super);
    function DropDownPage() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.page = new page_1.Page();
        return _this;
    }
    Object.defineProperty(DropDownPage.prototype, "dropdown", {
        get: function () { return $('#dropdown'); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DropDownPage.prototype, "selectedOption", {
        get: function () {
            var drDn = this.dropdown;
            return drDn.$("[selected=\"selected\"]");
        },
        enumerable: false,
        configurable: true
    });
    DropDownPage.prototype.selectOptionByValue = function (option) {
        var drDn = this.dropdown;
        drDn.selectByAttribute('value', option);
    };
    DropDownPage.prototype.getOptionByValue = function (val) {
        var drDn = this.dropdown;
        return drDn.$("[value=\"" + val + "\"]");
    };
    DropDownPage.prototype.open = function () {
        return this.page.open('dropdown');
    };
    return DropDownPage;
}(page_1.Page));
module.exports = new DropDownPage();
