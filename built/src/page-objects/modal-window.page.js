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
var ModalWindowPage = /** @class */ (function (_super) {
    __extends(ModalWindowPage, _super);
    function ModalWindowPage() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.page = new page_1.Page();
        return _this;
    }
    Object.defineProperty(ModalWindowPage.prototype, "modalWindow", {
        get: function () { return $('#modal'); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ModalWindowPage.prototype, "btnClose", {
        get: function () { return $('.modal-footer'); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ModalWindowPage.prototype, "btnClickHere", {
        get: function () { return $('#restart-ad'); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ModalWindowPage.prototype, "modalWindowBody", {
        get: function () { return $('.modal-body'); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ModalWindowPage.prototype, "modalWindowTitle", {
        get: function () { return $('.modal-title'); },
        enumerable: false,
        configurable: true
    });
    ModalWindowPage.prototype.open = function () {
        return this.page.open('entry_ad');
    };
    return ModalWindowPage;
}(page_1.Page));
module.exports = new ModalWindowPage();
