const AddRemoveElementsPage = require('../page-objects/add-remove-elements.page');

describe('Add Remove Element page', () => {

    it('shows delete button after clicking add button', () => {
        AddRemoveElementsPage.open();
        AddRemoveElementsPage.btnAdd.click();
        expect(AddRemoveElementsPage.getBtnRemove(0)).toBeDisplayed()
    })

    it('shows only one delete button after clicking once', () => {
        expect(AddRemoveElementsPage.getBtnRemove(1)).not.toExist()
    })

    it('shows only two elements after clicking twice', () => {
        AddRemoveElementsPage.btnAdd.click();
        expect(AddRemoveElementsPage.getBtnRemove(0)).toExist()
        expect(AddRemoveElementsPage.getBtnRemove(1)).toExist()
        expect(AddRemoveElementsPage.getBtnRemove(2)).not.toExist()
        expect(AddRemoveElementsPage.btnsRemove).toHaveChildren(2)
    })

    it('removes only snd element after clicking on snd btn', () => {
        AddRemoveElementsPage.getBtnRemove(1).click();
        expect(AddRemoveElementsPage.btnsRemove).toHaveChildren(1)
    })


})