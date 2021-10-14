const Page = require('./page');

class firstPage extends Page {
    get pageHeader() { return $('h1.heading') }
    get pageFooter() { return $('#page-footer') }
    
    scrollToPageFooter() {
        this.pageFooter.moveTo()
    }
}

module.exports = new firstPage();
