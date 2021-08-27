describe("Tickets", () => {
    beforeEach( () => cy.visit("https://bit.ly/2XSuwCW"));
    
    //O comando it é para criar um novo teste.

    //O cypress utiliza da biblioteca Mocka para testes de unidade.
    //O termo only é para teste de unidade, para poder testar somente um único teste
    
    it("fills all the text input fields", () => {
        const firtName = "David";
        const middleName = "Teixeira de"
        const lastName = "Masin";

        //Preenchendo os campos input
        //O comando .get identifica através dos seletores CSS
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

    //Selecionar um option
    it("select two tickets", () => {
        cy.get("#ticket-quantity").select("2");
    });

    //Selecionar um ratio button
    it("select VIP ticket type", () => {
        cy.get("#vip")
        .check(); //esta funcionalidade é útil para poder marcar um ratio button
    });

    //Interagindo com checkboxes
    it("selects 'social media' checkbox", () => {
        cy.get("#social-media")
        .check();
    });
    it.only("selects 'friend', and 'publication', then unckeck 'friend'", () => {
        cy.get("#friend")
        .check();
        cy.get("#publication")
        .check();
        cy.get("#friend")
        .uncheck();
    });

    it("has 'TICKETBOX' header's heading", () => {});
});