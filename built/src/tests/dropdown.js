"use strict";
var DropDownPage = require('../page-objects/dropdown.page');
describe('Dropdown page', function () {
    before('opens DropdownPage', function () {
        DropDownPage.open();
    });
    it('initially has disabled option selected', function () {
        expect(DropDownPage.selectedOption.getAttribute('disabled')).toBe('true');
    });
    it('selects option 1', function () {
        var option = '1';
        var textOption = "Option 1";
        DropDownPage.selectOptionByValue(option);
        expect(DropDownPage.getOptionByValue(option)).toBeSelected();
        expect(DropDownPage.selectedOption.getText()).toEqual(textOption);
    });
    it('selects option 2', function () {
        var option = '2';
        DropDownPage.selectOptionByValue(option);
        expect(DropDownPage.getOptionByValue(option)).toBeSelected();
    });
});
