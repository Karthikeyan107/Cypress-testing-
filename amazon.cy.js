describe("amazon", () => {
    beforeEach('before', () => {
        cy.visit('https://www.amazon.in/')

        //// HOOK for visiting the website
    })
    it('searchbar', () => {
        cy.get('#twotabsearchtextbox').should('exist').click().type('sunglass{enter}')
        cy.get('#twotabsearchtextbox').clear().type('{enter}')
        // Testing Searchbar
    })
    it('amazonbutton', () => {
        cy.get('#twotabsearchtextbox').should('exist').click()
    })
    it('language', () => {
        cy.get('.icp-nav-link-inner > .nav-line-2').should('exist').click()
        cy.get(':nth-child(7) > .a-radio > label > .a-icon').click()
        cy.get('.a-button-input').click()
        cy.wait(3000)
        cy.get('.icp-nav-link-inner > .nav-line-2').should('exist').click()
        cy.get(':nth-child(4) > .a-radio > label > .a-icon').should('exist').click()
        cy.get('.a-button-input').click()
        cy.wait(3000)
        // To check the language 
    })
    it('all', () => {
        cy.get('#nav-hamburger-menu').click()
        cy.get('#hmenu-content > .hmenu-visible').should('exist')
        cy.get(':nth-child(33) > .hmenu-item').scrollIntoView()
    })
    it('sellpage', () => {
        cy.get('[href="/b/32702023031?node=32702023031&ld=AZINSOANavDesktop_T3&ref_=nav_cs_sell_T3"]').click()
        cy.get('.a-container').should('exist')
        cy.get('.padding-top-xsmall > .align-start > .link').click()

    })
    it.only('miniTV', () => {
        cy.get('[href="/minitv?ref_=nav_avod_desktop_topnav"]').should('exist').click()
        cy.get('[data-testid="appnavbar_menuitem_webseries"]').click()
        cy.wait(2000)
        cy.get('[data-testid="appnavbar_menuitem_shortfilms"]').should('exist').click()
        cy.wait(2000)
        cy.get('[data-testid="appnavbar_menuitem_comedy"]').should('exist').click()
        cy.wait(2000)
        
    })
    it('todaysDeal',()=>{
        cy.get('[href="/deals?ref_=nav_cs_gb"]').click()
        cy.get('.a-size-extra-large').should('exist')
        cy.get('[aria-posinset="1"]').should('exist').click()
    })
    it("star-5", () => {
        cy.get('#nav-link-accountList > .nav-line-2').should('exist').click()
        ///Open the sign page 
        cy.get('#ap_email').should('exist').click().type('9361454584')
        cy.get('.a-button-inner > #continue').click()
        cy.get('.a-padding-extra-large > .a-spacing-small').should('exist')
        cy.get('#ap_password').should('exist').click().type('@Karthik90950')
        cy.get('#signInSubmit').click()
        ///Entering the details and validating it
        cy.wait(20000)
        /// Wait time for otp , which can't be accesed
        cy.get('#auth-signin-button').should('exist').click()
        cy.get('#nav-orders').should('exist').click()
        //// Entering and validating the OTP
        cy.get('#a-autoid-5 > .a-button-inner > #Leave-seller-feedback_2').should('exist').click()
        ///Opening the prodect page 
        cy.get(':nth-child(2) > form > #stars > :nth-child(2) > .a-fixed-right-grid-col > .a-section > [name="star5"]').should('exist').click()
        ///Providing the star rating
        cy.get(':nth-child(2) > form > #additionalInput > :nth-child(1) > :nth-child(1) > #feedbackText > .a-input-text-wrapper > textarea').should('exist').click().type('excellent')
        /// Entering the command 
        cy.get('#a-autoid-11-announce').should('exist')
        ///Validating the submit button
        cy.wait(10000)

    })
    
    it("star1", () => {
        cy.get('#nav-link-accountList > .nav-line-2').should('exist').click()
        ///Open the sign page 
        cy.get('#ap_email').should('exist').click().type('9361454584')
        cy.get('.a-button-inner > #continue').click()
        cy.get('.a-padding-extra-large > .a-spacing-small').should('exist')
        cy.get('#ap_password').should('exist').click().type('@Karthik90950')
        cy.get('#signInSubmit').click()
        ///Entering the details and validating it
        cy.wait(20000)
        /// Wait time for otp , which can't be accesed
        cy.get('#auth-signin-button').should('exist').click()
        cy.get('#nav-orders').should('exist').click()
        //// Entering and validating the OTP
        cy.get('#a-autoid-5 > .a-button-inner > #Leave-seller-feedback_2').should('exist').click()
        ///Opening the prodect page 
        cy.get(':nth-child(2) > form > #stars > :nth-child(2) > .a-fixed-right-grid-col > .a-section > [name="star1"]').should('exist').click()
        ///Providing the star rating
        cy.get(':nth-child(2) > form > #additionalInput > :nth-child(1) > :nth-child(1) > #recordNegativeFeedback > :nth-child(2) > .a-box-group > [data-reason="DidNotReceivePackage"] > .a-box-inner > .a-accordion-row-a11y > .a-accordion-row > .a-icon').click()
        cy.get(':nth-child(2) > form > #additionalInput > :nth-child(1) > :nth-child(1) > #feedbackText > .a-input-text-wrapper > textarea').click().type('bad')
        /// Entering the command 
        cy.get('#a-autoid-7-announce').should('exist')
        ///Validating the submit button
        cy.wait(10000)
    })
})