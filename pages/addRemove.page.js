const Page = require('./page');

class addRemovePage extends Page {
    get addButton() { return $('.example button' ) }
    deleteButtons(index) { return $(`#elements button:nth-child(${index})`) }

    clickAddButton() {
        this.addButton.waitForDisplayed()
        this.addButton.click()
    }
    
    clickDeleteButton(index) {
        this.deleteButtons(index).waitForDisplayed()
        this.deleteButtons(index).click()
    }

    open () {
        return super.open('add_remove_elements/');
    }
}

module.exports = new addRemovePage();
