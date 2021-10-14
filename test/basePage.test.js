const firstPage = require('../pages/internet.page')

describe ("na to allaksw", function() {
    it('should scroll to the footer', () => {
        browser.url('/')
        firstPage.pageHeader.waitForDisplayed()
        firstPage.pageFooter.scrollIntoView()
        firstPage.scrollToPageFooter()
        expect(firstPage.pageFooter).toBeDisplayedInViewport()
    })
})