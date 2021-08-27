describe("Tickets", () => {
    beforeEach( () => cy.visit("https://bit.ly/2XSuwCW"));
    
    //O comando it é para criar um novo teste.

    //O cypress utiliza da biblioteca Mocka para testes de unidade.
    //O termo only é para teste de unidade, para poder testar somente um único teste
    
    it("fills all the text input fields", () => {
        const firstName = "David";
        const middleName = "Teixeira de";
        const lastName = "Masin";

        //Preenchendo os campos input
        //O comando .get identifica através dos seletores CSS
        cy.get("#first-name")
          .type(firstName); //Add dados textuais

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
    //Verifica se uma dada classe existe ou não na DOM.
    it("alerts on invalid email", () => {
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

    //Criando uma verificação completa
    //Preencher tudo e depois resetar o form
    it.only("fills and reset before", () => {
        const firstName = "David";
        const middleName = "Teixeira de";
        const lastName = "Masin";
        const fullName = `${firstName} ${middleName} ${lastName}`; 

        //Preenchimento do Nome
        cy.get("#first-name")
          .type(`${firstName}`);
        
        cy.get("#last-name")
          .type(`${middleName} ${lastName}`);

        //Preenchimento do E-mail
        cy.get("#email")
          .type("davidteixeira.info@gmail.com");

        //Escolha da quantidade de tickets
        cy.get("#ticket-quantity")
          .select("2")

        //Escolha do tipo de Ticket
        cy.get("#vip")
          .check();

        //Escolha de onde ouviu sobre o evento
        cy.get("#friend")
          .check();

        //Digitando sobre a requisição especial
        cy.get("#requests")
          .type("Suco de laranja bem gelado");

        //Verificando se o nome que digito aparece lá em Purchase Agreement
        cy.get(".agreement > fieldset p")
          .should(
            "contain",
            `I, ${fullName}, wish to buy 2 VIP tickets.`
          );

    });
});