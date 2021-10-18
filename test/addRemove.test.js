const addRemovePage = require('../pages/addRemove.page')

describe('add one time then delete', function() {
    it('wait until delete button exists', () => {
        // addRemovePage.open()
        browser.url('/add_remove_elements/')
        browser.pause(2000)
        addRemovePage.clickAddButton()
        addRemovePage.deleteButtons(1).waitForExist()
        // assert.equal(true, addRemovePage.deleteButtons(1).isExisting())
    })
//     it('wait for delete button not to exist', () => {
//         addRemovePage.clickDeleteButton(1)
//         addRemovePage.deleteButtons(1).waitForExist({timeout:500, reverse:true})
//         assert.equal(false, addRemovePage.deleteButtons(1).isExisting())
//     })
})
