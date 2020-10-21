const Page = require('./page');

class HoversPage extends Page {

    get subUrl () { return 'hovers'}

    getElementByIndex (index) {
        return ($('.example').$$('div .figure')[index])
    }

    getLinkByIndex (index) {
        return ($('.example').$$('div .figure')[index].$('a'));
    }

    open () {
        return super.open('hovers');
    }
}
module.exports = new HoversPage();