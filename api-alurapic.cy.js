describe('Api ALurapic', () => {
    //it('Dados da API', () => {
      //cy.request({
        //method:'POST',
        //url: 'https://alurapic-api.onrender.com/user/login',
        //failOnStatusCode: false,
        //body: Cypress.env()
      //}).then((res) => {
        //expect(res.status).to.be.equal(200)
        //expect(res.body).is.not.empty
        //expect(res.body).to.have.property('id')
        //expect(res.body.id).to.be.equal(4)
      //})
    })

    it('Fotos do User', () => {

        //const tempoEsperado = Math.random() * 1

      cy.request({
        method:'GET',
        url: 'https://alurapic-api.onrender.com/andrep/photos?page=1',

      }).then((res) => {
        expect(res.status).to.be.equal(200)
        expect(res.body).is.not.empty
        expect(res.body[0]).to.have.property('description')
        expect(res.body[0].description).to.be.equal('onibus espacial lançando')
        //expect(res.duration).to.be.lte(tempoEsperado)
  })
})