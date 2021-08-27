describe("Tickets", () => {
    beforeEach( () => cy.visit("https://bit.ly/2XSuwCW"));

    //O cypress utiliza da biblioteca Mocka para testes de unidade.
    //O termo only é para teste de unidade, para poder testar somente um único teste
        it.only("fills all the text input fields", () => {
        const firtName = "David";
        const middleName = "Teixeira de"
        const lastName = "Masin";
        //Identifica através dos seletores CSS
        cy.get("#first-name")
        .type(firtName); //Add dados textuais

        cy.get("#last-name")
        .type(lastName);

        cy.get("#email")
        .type("davidteixeira.info@gmail.com");

        cy.get("#requests")
        .type("Vegeterian");

        cy.get("#signature")
        .type(`${firtName} ${middleName} ${lastName}`);
    })
    it("has 'TICKETBOX' header's heading", () => {});
});