describe("Testing our form inputs", function() {
    beforeEach(function() {
      cy.visit("http://localhost:3000/pizza");
    });
    it("Adds text to inputs and submits form", function() {
      cy.get('input[name="name"]')
        .type("romeo")
        .should("have.value", "romeo");
      cy.get("textarea")
        .type("I want to add spicy")
        .should("have.value", "I want to add spicy");
      cy.get("select")
        .select("small")
        .should("have.value", "small");
      cy.get('[type="checkbox"]').check(['bbq sauce','soy sauce','Ranch','original Red']);
      cy.get("button").click();
    });
  });