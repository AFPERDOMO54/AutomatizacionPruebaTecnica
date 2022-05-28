describe ('Prueba de cotizacion', function(){

    beforeEach(() =>{
        
    });
    it('Modal Asistencia medica internacional', () => {
        cy.wait(2000)
        cy.visit('https://www.segurodeviajemundial.com.co/')
        cy.get(':nth-child(1) > :nth-child(1) > .form-group > .form-control').select('Latinoamerica. Caribe y Cánada (No USA)').should('have.value', '1')
        //Seleccionar fecha de salida
        cy.get('#fecha_ida').click()
        cy.get('.ui-datepicker-calendar')
          .contains('28')
          .click({force: true})
        cy.get('#fecha_ida')
          .invoke('prop', 'value')
          .should('contain', '2022-05-28')
        //Seleccionar fecha de salida
        cy.get('#fecha_regreso').click()
        cy.get(':nth-child(5) > :nth-child(3) > .ui-state-default')
        .contains('31')
        .click()
        cy.get('#fecha_regreso')
           .invoke('prop', 'value')
           .should('contain', '2022-05-31')

        cy.get(':nth-child(2) > :nth-child(2) > .form-group > .form-control').type("pipeperdomo1999@gmail.com") 
        cy.get('.p-0 > .btn').click()
    })

    it('Informacion Pasajeros',()=>{
        cy.get('.asegurados').select('2').should('have.value', '2') 
        cy.get(':nth-child(8) > .input-group > .form-control').type("Juan Manuel")
        cy.get(':nth-child(8) > :nth-child(2) > .form-control').type("Castro")
        cy.get(':nth-child(8) > :nth-child(3) > .form-control').type("4363471")
        //Seleccionar Fecha nacimiento


        cy.get(':nth-child(9) > .input-group > .form-control').type("Alvaro Javier")
        cy.get(':nth-child(9) > :nth-child(2) > .form-control').type("Morales")
        cy.get(':nth-child(9) > :nth-child(3) > .form-control').type("58972547")


        


    })

    it('Realizar PAGO',()=>{
        cy.get(':nth-child(11) > :nth-child(4) > .form-control').type("3214658798")
        cy.get('.my-4 > .btn').click()
        cy.get('#swal2-content').contains("Completar")
        cy.log("Pruebas terminada incompleta")
        cy.get('.swal2-confirm').click()
    
    })


})