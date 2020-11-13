const DropDownPage = require('../page-objects/dropdown.page');

describe('Dropdown page', () => {

    before('opens DropdownPage',function() {
        DropDownPage.open();
    });

    it('initially has disabled option selected', () => {
        expect(DropDownPage.selectedOption.getAttribute('disabled')).toBe('true');
    })

    it('selects option 1', () => {
        const option = '1'
        const textOption = "Option 1"
        DropDownPage.selectOptionByValue(option);
        expect(DropDownPage.getOptionByValue(option)).toBeSelected();
        expect(DropDownPage.selectedOption.getText()).toEqual(textOption);
    })

    it('selects option 2', () => {
        const option = '2'
        DropDownPage.selectOptionByValue(option);
        expect(DropDownPage.getOptionByValue(option)).toBeSelected();
    })
})