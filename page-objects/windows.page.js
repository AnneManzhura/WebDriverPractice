const Page = require('./page');

class WindowsPage extends Page {


    get btnClick() {return $(".example a")}

    get textHeader() {return $(".example h3")}


    open () {
        return super.open('windows');
    }
}
module.exports = new WindowsPage();