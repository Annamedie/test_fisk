describe("template spec", () => {
  it("passes", () => {
    cy.visit("/");
    cy.get("h1").contains("Welcome to the fish site!").should("be.visible");
  });
});
