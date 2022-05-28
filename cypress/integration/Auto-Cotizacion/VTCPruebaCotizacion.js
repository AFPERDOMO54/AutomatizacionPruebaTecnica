
describe ('Prueba de cotizacion', function(){

    beforeEach(() =>{

    });
    it('Ingresar informacion', () => {
        cy.wait(2000)
        cy.visit('https://pe.visatravelcenter.com/')
        cy.get('#destiny_id').select('Colombia').should('have.value', '44')
        cy.get('#name').type("Andres Felipe Perdomo")
        cy.get('#email').type("pipeperdomo1999@gmail.com")
        cy.get('#phone').type("3202217132")
        cy.get('.h-10 > .btn').click()
    })

    it('Seleccionar Servicio',()=>{
        
        cy.get('.font-size-30 > b').contains('Hola, Andres')
        cy.get(':nth-child(1) > .box-plan > :nth-child(5) > .row > .col-12 > .btn').click()
    })

    it('Realizar PAGO',()=>{
        cy.get('.cont-resumen').contains('Resumen de compra')
        cy.get('.img-select').click()
        cy.get('.form-control').type("98925-457487-54846")
        cy.get('.__PrivateStripeElement > iframe').type("5558254279989874")
        cy.get('#terms').click()
        cy.get('.btn').click()
    
    })

    it('Ultima Validacion',()=>{
        cy.get(':nth-child(2) > .text-danger').contains("¡UPS! LO SENTIMOS. ALGO SALIÓ MAL.")
        cy.log("Regresar al metodo anterior.")
        cy.get('.btn').click()
    })


})