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
        cy.get("#ticket-quantity")
          .select("2");
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
    it("selects 'friend', and 'publication', then unckeck 'friend'", () => {
        cy.get("#friend")
          .check();
        cy.get("#publication")
          .check();
        cy.get("#friend")
          .uncheck();
    });

    //Criando uma ASSERTION com o uso do should
    it("has 'TICKETBOX' header's heading", () => {
        cy.get("header h1")
          .should("contain", "TICKETBOX"); //Vai checar se o header contém o texto TICKETBOX
    });

    //Criando uma ASSERTION que digita um email inválido e redigita-o.
    //Verifica se uma dada classe existe ou não na DOM
    it.only("alerts on invalid email", () => {
        cy.get("#email")
          .as("email") //criando um alias [apelido]
          .type("davidteixeira.info-gmail.com");

        cy.get("#email.invalid")
          .should("exist"); //Vai checar se a classe invalid existe

        cy.get("@email") //Usa-se o '@' para referenciar um alias
          .clear() //limpa o que foi digitado no input
          .type("davidteixeira@gmail.com");

        cy.get("#email.invalid")
          .should("not.exist"); //Vai checar se a classe invalid não existe
    });
});