const Page = require('./page');

class DropDownPage extends Page {

    get dropdown () { return $('#dropdown')}

    get selectedOption () {
        const drDn = this.dropdown
        return drDn.$(`[selected="selected"]`)
    }

    selectOptionByValue (option) {
        const drDn = this.dropdown
        drDn.selectByAttribute('value', option);
    }

    getOptionByValue (val) {
        const drDn = this.dropdown
        return drDn.$(`[value="${val}"]`)
    }

    open () {
        return super.open('dropdown');
    }
}
module.exports = new DropDownPage();