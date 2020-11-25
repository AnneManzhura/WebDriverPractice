import { binding, then, when, given } from 'cucumber-tsflow';
import {DropDownPage} from '../page-objects/dropdown.page';

@binding()
export class DropDownPageSteps {

    dropDownPage = new DropDownPage();

    @given(/^I open Dropdown page$/)
    openDropDownPage() {
        this.dropDownPage.open();
    };

    @then(/^I see disabled option initially selected$/)
    disabledIsSelected() {
        expect(this.dropDownPage.selectedOption.getAttribute('disabled')).toBe('true');
    };

    @when(/^I select (.*) from dropdown$/)
    selectValue(value:string) {
        this.dropDownPage.selectOptionByValue(value);
    };

    @then(/^I see (.*) value selected$/)
    seeSelectedValue(text:string) {
        expect(this.dropDownPage.selectedOption.getText()).toEqual(text);
    };


}
