import {Page} from './page';

export class TablesPage extends Page {
    page = new Page();

    get table(): WebdriverIO.Element { return $('#table2')}

    get rows(): WebdriverIO.ElementArray { return this.table.$('tbody').$$('tr')}

    getEmailByRow(row: WebdriverIO.Element): WebdriverIO.Element {return row.$('.email')}

    getWebsiteByRow(row: WebdriverIO.Element): WebdriverIO.Element {return row.$('.web-site')}

    getFirstNameByRow(row: WebdriverIO.Element): WebdriverIO.Element {return row.$('.first-name')}

    getLastNameByRow(row: WebdriverIO.Element): WebdriverIO.Element {return row.$('.last-name')}

    getDuesByRow(row: WebdriverIO.Element): WebdriverIO.Element {return row.$('.dues')}

    getDeleteBtnByRow(row: WebdriverIO.Element): WebdriverIO.Element {return row.$('.action').$('a[href*="delete"]')}

    getEditBtnByRow(row: WebdriverIO.Element): WebdriverIO.Element {return row.$('.action').$('a[href*="edit"]')}

    getRowByEmail(email: string): WebdriverIO.Element {
        return this.getRowByCellText('.email', email);
    }

    getRowByWebsite(website: string): WebdriverIO.Element {
        return this.getRowByCellText('.web-site', website);
    }

    getRowByCellText(cellLocator: string, expectedCellText: string): WebdriverIO.Element {
        return this.findRowByPredicate(row => {
            const text = row.$(cellLocator).getText();
            return text.toLowerCase() === expectedCellText.toLowerCase();
        });
    }

    findRowByPredicate(predicate: (row: WebdriverIO.Element) => boolean): WebdriverIO.Element{
        const rowByPredicate = this.rows.find(predicate);

        if (typeof(rowByPredicate) == 'undefined') {
            throw new Error(`[Table] Row was not found by predicate`);
        }
        return rowByPredicate;
    }

    open (): void {
        return this.page.open('tables');
    }
}
