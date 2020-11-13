"use strict";
var ModalWindowPage = require('../page-objects/modal-window.page');
describe('Modal Window page', function () {
    var validModalWindowText = "It's commonly used to encourage a user to take an action (e.g., give their e-mail address to sign up for something or disable their ad blocker).";
    var validModalWindowTitle = "THIS IS A MODAL WINDOW";
    before('opens DropdownPage', function () {
        ModalWindowPage.open();
    });
    it('initially has modal window opened ', function () {
        expect(ModalWindowPage.modalWindow).toBeDisplayed();
    });
    it('closes modal window after clicking the close button', function () {
        ModalWindowPage.modalWindow.waitForDisplayed();
        expect(ModalWindowPage.btnClose).toHaveText('Close');
        ModalWindowPage.btnClose.click();
        expect(ModalWindowPage.modalWindow).not.toBeDisplayed();
    });
    it('opens modal window after clicking the "click here" button', function () {
        ModalWindowPage.modalWindow.waitForDisplayed({ timeout: 1000, reverse: true });
        ModalWindowPage.btnClickHere.click();
        expect(ModalWindowPage.modalWindow).toBeDisplayed();
    });
    it('opens modal window with valid text inside', function () {
        ModalWindowPage.modalWindow.waitForDisplayed();
        expect(ModalWindowPage.modalWindowBody).toHaveText(validModalWindowText);
    });
    it('opens modal window with valid title', function () {
        ModalWindowPage.modalWindow.waitForDisplayed();
        expect(ModalWindowPage.modalWindowTitle).toHaveText(validModalWindowTitle);
    });
});
