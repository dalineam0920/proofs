describe('CRUD SL', () => {

  // we need a name for SL for creating and editing
    const randomNumber = Math.floor(Math.random() * 1000) + 1;
    const randomName = `new SL cypress test ${randomNumber}`;
    const randomNameUpd = `${randomName} + upd`;

    const setupSession = () => {
        // login to the site
        cy.visit('/en/register');
        cy.get('#loginForm_email').type('email');
        cy.get('#loginForm_password').type('password');
        cy.get('#loginForm_submit').click();
        cy.url().should('include', "/en/shopping");
    };

    beforeEach(() => {
        cy.session('loginSession', setupSession); //re use of the user token otherwise it will make us back to login page
    });

    it('SL creating', () => {
        cy.visit('/en/shoppinglists');
        cy.get('[data-qa="market-menu-item-sl-blabla"]').click();
        cy.get('.qa-sl-blabla-create-button > .inline-block > .button > .app-dropdown__button-label').click();
        cy.get('.app-dropdown__items > :nth-child(1)').click();
        cy.get('.c-input--oneliner').clear();
        cy.get('.c-input--oneliner').type(randomName).type('{enter}');
    });

    it('SL editing', () => {
        // selecting the SL which was created
        cy.visit('/en/shoppinglists');
        cy.wait(500);
        cy.get('[data-qa="market-menu-item-sl-blabla"]').click({ timeout: 3000 });
        cy.get('[class="c-vue-blablabla-table__body-item-content qa-sl-blabla-name"]').contains(randomName).click({ timeout: 3000 });
        cy.get('.button > span').click();
        cy.get('.text-3xl').type(' upd');
        cy.get('.md\\:max-w-screen-sm > .relative > .c-input--sm').clear('8');
        cy.get('.md\\:max-w-screen-sm > .relative > .c-input--sm').type('81256');
        cy.get('.autocomplete-item > div > p').click();
        cy.wait(500);
        cy.get('.md\\:max-w-screen-sm > .relative > .c-input--sm').clear('9');
        cy.get('.md\\:max-w-screen-sm > .relative > .c-input--sm').type('91044');
        cy.get('.autocomplete-item > div > p').click();
        cy.wait(500);
        cy.get('.p-4 > .c-input--oneliner').click();
        cy.get('.contained').click();
        cy.wait(1000);
    });

    it('SL copying', () => {
        cy.visit('/en/shoppinglists');
        cy.get(':nth-child(3) > .c-vue-blablabla-table__body-row > .w-20 > a.justify-end > .justify-end > :nth-child(2) > .qa-duplicate-sl-blabla > .inline-flex').click();
        cy.get('.mb-6 > .button').click();
        cy.wait(1000);
    });

    it('SL deleting', () => {
        cy.visit('/en/shoppinglists');
        cy.get(':nth-child(2) > .c-vue-blablabla-table__body-row > .w-20 > a.justify-end > .justify-end > :nth-child(2) > .qa-delete-sl-blabla > .inline-flex > path').click();
        cy.get('#notification1').should('contain', 'The order list has been successfully removed.');
        cy.wait(1000);
    });

    after('Cleaning', function () {
        cy.visit('/en/shoppinglists', { timeout: 3000 });
        cy.get(':nth-child(2) > .c-vue-blablabla-table__body-row > .w-20 > a.justify-end > .justify-end > :nth-child(2) > .qa-delete-sl-blabla > .inline-flex > path').click();
        cy.wait(1000);
    })

});
