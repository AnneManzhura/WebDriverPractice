const Page = require('./page');

class TablesPage extends Page {


    get table() { return $('#table2')}
    get rows() { return this.table.$('tbody').$$('tr')}


    getEmailByRow(row) {return row.$('.email')}

    getWebsiteByRow(row) {return row.$('.web-site')}

    getFirstNameByRow(row) {return row.$('.first-name')}

    getLastNameByRow(row) {return row.$('.last-name')}

    getDuesByRow(row) {return row.$('.dues')}

    getDeleteBtnByRow(row) {return row.$('.action').$('a[href*="delete"]')}

    getEditBtnByRow(row) {return row.$('.action').$('a[href*="edit"]')}


    getRowByEmail(email) {
        return this.getRowByCellText('.email', email);
    }

    getRowByWebsite(website) {
        return this.getRowByCellText('.web-site', website);
    }

    getRowByCellText(cellLocator, expectedCellText) {
        const row = this.findRowByPredicate(row => {
            const text = row.$(cellLocator).getText();
            return text.toLowerCase() === expectedCellText.toLowerCase();
        });
        return row;
    }

    findRowByPredicate(predicate) {
        return this.rows.find(predicate);
    }

    open () {
        return super.open('tables');
    }
}
module.exports = new TablesPage();