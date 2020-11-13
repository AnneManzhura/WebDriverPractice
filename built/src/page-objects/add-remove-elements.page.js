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
var AddRemoveElementsPage = /** @class */ (function (_super) {
    __extends(AddRemoveElementsPage, _super);
    function AddRemoveElementsPage() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.page = new page_1.Page();
        return _this;
    }
    Object.defineProperty(AddRemoveElementsPage.prototype, "btnAdd", {
        get: function () { return $('.example > button'); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AddRemoveElementsPage.prototype, "btnsRemove", {
        get: function () { return $('#elements'); },
        enumerable: false,
        configurable: true
    });
    AddRemoveElementsPage.prototype.getBtnRemove = function (index) {
        var btnsRemove = $('#elements');
        return btnsRemove.$$('button.added-manually')[index];
    };
    AddRemoveElementsPage.prototype.open = function () {
        return this.page.open('add_remove_elements/');
    };
    return AddRemoveElementsPage;
}(page_1.Page));
module.exports = new AddRemoveElementsPage();
