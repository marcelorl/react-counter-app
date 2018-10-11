describe('Counter', () => {
    it('succesfully incremented the counter by 1', () => {
        cy.visit('/');

        const buttonIncrement = cy.get('.buttons button').first();
        buttonIncrement.find('span').first().should('contain', 'Increment!');
        buttonIncrement.click();

        cy.contains('Current Count: 1');
    });

    it('succesfully decrement the counter by 1', () => {
        cy.visit('/');
        const buttonDecrement = cy.get('.buttons button').eq(1);
        buttonDecrement.find('span').first().should('contain', 'Decrement!');
        buttonDecrement.click();

        cy.contains('Current Count: -1');
    });

    it('succesfully reset the counter', () => {
        cy.visit('/');

        cy.get('.buttons button').first().click();
        cy.get('.buttons button').first().click();
        cy.get('.buttons button').first().click();
        cy.contains('Current Count: 3');

        const buttonReset = cy.get('.buttons button').last();
        buttonReset.find('span').first().should('contain', 'RESET');
        buttonReset.click();

        cy.contains('Current Count: 0');
    });
});