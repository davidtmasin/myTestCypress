describe("Tickets", () => {
    beforeEach( () => cy.visit("https://bit.ly/2XSuwCW"));
    
    it("Fills mandatory fields using support command", () => {
        const customer = {
            firstName: "David",
            lastName: "Teixeira de Masin",
            email: "davidteixeira.info@gmail.com",
        };

        cy.fillMandatoryFields(customer);

        //Verificar se o botão do 'Confirm Ticket' está habilitado
        cy.get("button[type='submit']")
          .as("submitButton")
          .should("not.be.disabled"); //Verifica se o botão não está desabilitado

        //Clicando no botão 'Reset'
        cy.get("#agree")
          .uncheck();

        //Verificar se o botão 'Confirm Ticket' está desabilitado após o clique no 'Reset'
        cy.get("@submitButton")
          .should("be.disabled"); //Verifica se o botão está desabilitado

    });

});