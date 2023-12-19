describe('Página de login', () => {

    beforeEach(() => {
        cy.visit('http://localhost:4200')
    })

        it('Verifica mensagens de campos obrigatórios na página de login', () => {
            cy.contains('User name is required!').should('be.visible');
            cy.contains('Password is required!').should('be.visible');
        
        })
})