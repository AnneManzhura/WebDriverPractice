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
var WindowsPage = /** @class */ (function (_super) {
    __extends(WindowsPage, _super);
    function WindowsPage() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.page = new page_1.Page();
        return _this;
    }
    Object.defineProperty(WindowsPage.prototype, "btnClick", {
        get: function () { return $(".example a"); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WindowsPage.prototype, "textHeader", {
        get: function () { return $(".example h3"); },
        enumerable: false,
        configurable: true
    });
    WindowsPage.prototype.open = function () {
        return this.page.open('windows');
    };
    return WindowsPage;
}(page_1.Page));
module.exports = new WindowsPage();
