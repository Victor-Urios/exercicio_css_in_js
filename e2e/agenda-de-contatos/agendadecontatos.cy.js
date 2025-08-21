///    <reference types="cypress" />

describe('Testes para a pagina de candidatura', () => { 
    beforeEach (() => {
        cy.visit('https://ebac-agenda-contatos-tan.vercel.app/')
    })
    it('Deve preencher o formulario de inscrição e conter 4 contatos', () => {
        cy.get('[type="text"]').type('nebula stardust')
        cy.get('[type="email"]').type('nebulinha@teste.com')
        cy.get('[type="tel"]').type('11 87654321')
        cy.get('.adicionar').click()
        cy.get('.sc-dmqHEX').should('have.length', 4)
        })
    it('Deve alterar o Nebula!', () => {
        cy.get('.sc-gueYoa > .edit').last().click()
        cy.get('[type="text"]').clear()
        cy.get('[type="email"]').clear()
        cy.get('[type="tel"]').clear()
        cy.get('[type="text"]').type('Nebula Stardust')
        cy.get('[type="email"]').type('nebulastar@teste.com')
        cy.get('[type="tel"]').type('11 12345678')

        cy.get('.alterar').click()
    })
    it('Devera deletar o nebula e voltar a ter 3 contatos', () => { 
        cy.get('.sc-gueYoa > .delete').last().click()
        cy.get(':nth-child(5) > .sc-dmqHEX').should('not.exist')
    })
})