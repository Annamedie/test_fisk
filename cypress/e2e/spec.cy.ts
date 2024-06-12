describe("template spec", () => {
  //innan varje test körs detta
  beforeEach(() => {
    cy.exec("npm run reset && npm run seed");
  });
  it("passes", () => {
    cy.visit("/");
    cy.get("h1").contains("Welcome to the fish site!").should("be.visible");
  });
});
