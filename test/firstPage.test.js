const { assert } = require('console')
const firstPage = require('../pages/internet.page')

describe ("first test", function() {
    it('should scroll to the footer', () => {
        browser.url('/')
        firstPage.pageHeader.waitForDisplayed()
        firstPage.pageFooter.scrollIntoView()
        firstPage.scrollToPageFooter()
        assert(true, firstPage.pageFooter.isDisplayed())
    })
})