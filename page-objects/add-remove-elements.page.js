const Page = require('./page');

class AddRemoveElementsPage extends Page {

    get btnAdd () { return $('.example > button') }
    get btnsRemove () { return $('#elements') }

    getBtnRemove (index) {
        const btnsRemove = $('#elements')
        return (btnsRemove.$$('button.added-manually')[index])
    }

    open () {
        return super.open('add_remove_elements/');
    }
}

module.exports = new AddRemoveElementsPage();