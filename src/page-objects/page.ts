/**
* main page object containing all methods, selectors and functionality
* that is shared across all page objects
*/
export class Page {
    /**
    * Opens a sub page of the page
    * @param path path of the sub page (e.g. /path/to/page.html)
    */

    open (path: string): void {
        return browser.url(`https://the-internet.herokuapp.com/${path}`)
    }
}
