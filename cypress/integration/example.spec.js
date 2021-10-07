
describe('Example Test', ()=>{
    before(()=>{
        cy.visit('/');
    });

    describe('HTML elements', ()=>{   
        it('body should be visible', ()=>{
            cy.get('body').should('be.visible');
        });
    });
});