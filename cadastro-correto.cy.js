import Cadastro from '../support/pages/cadastro/pagina-cadastro'

describe('Página de cadastro', () => {

  beforeEach(() => {
    cy.visit('https://3076-cypress-alurapic-front.vercel.app/#/home/')
  })

      it('Preencher os campos do formulário corretamente para cadastrar um novo usuário', () => {

        //cy.get('[data-test="register"]').click();
        //cy.get('input[data-test="email"]').type(usuario.email);
        //cy.get('input[data-test="fullName"]').type(usuario.fullName);
        //cy.get('input[data-test="registerUserName"]').type(usuario.userName);
        //cy.get('input[data-test="registerPassword"]').type(usuario.password);
        //cy.get('[data-test="btnRegister"]').click();

        Cadastro.acessarPaginaDeCadastro();
        Cadastro.preencherFormulario();
        Cadastro.submeterCadastro();
    })
    
      
      })
  