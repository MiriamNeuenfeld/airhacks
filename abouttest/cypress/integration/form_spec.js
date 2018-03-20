
describe('Fill input', () => {
    it('.should() - assert that <title> is correct', function () {
        // https://on.cypress.io/visit
        cy.visit('http://localhost:3000')
  
        cy.title().should('include', 'WebStandards template')
    })
  
    context('Querying', function () {
        beforeEach(() => {
            cy.visit('http://localhost:3000')
        })
  
        it('get input', () => {
            /*
            cy.window().then((win) => {
                win.myinput.value = "does not work";
            });
            */
            const expected = "something";
            cy.get('input').type(expected).blur();
            cy.get('output').should("have.value",expected);
  
        })
  
    })
});    
  