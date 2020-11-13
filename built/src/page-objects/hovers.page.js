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
var HoversPage = /** @class */ (function (_super) {
    __extends(HoversPage, _super);
    function HoversPage() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.page = new page_1.Page();
        return _this;
    }
    Object.defineProperty(HoversPage.prototype, "subUrl", {
        get: function () { return 'hovers'; },
        enumerable: false,
        configurable: true
    });
    HoversPage.prototype.getElementByIndex = function (index) {
        return $('.example').$$('div .figure')[index];
    };
    HoversPage.prototype.getLinkByIndex = function (index) {
        return $('.example').$$('div .figure')[index].$('a');
    };
    HoversPage.prototype.open = function () {
        return this.page.open('hovers');
    };
    return HoversPage;
}(page_1.Page));
module.exports = new HoversPage();
