const Page = require('./page');

class ModalWindowPage extends Page {

    get modalWindow() { return $('#modal')}
    get btnClose() {return $('.modal-footer')}
    get btnClickHere() {return $('#restart-ad')}
    get modalWindowBody() {return $('.modal-body')}
    get modalWindowTitle() {return $('.modal-title')}

    open () {
        return super.open('entry_ad');
    }
}
module.exports = new ModalWindowPage();