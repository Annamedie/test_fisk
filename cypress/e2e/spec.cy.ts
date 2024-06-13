describe("Startpage", () => {
  //innan varje test körs detta
  before(() => {
    cy.exec("npm run reset && npm run seed");
  });
  it("Should visit startPage and find a headline", () => {
    cy.visit("/");
    cy.get("h1")
      .contains("Welcome to the ugly but lovely fish site!")
      .should("be.visible");
  });
  it("Should have a header and footer", () => {
    cy.visit("/");
    cy.get("header").should("be.visible");
    cy.get("footer").should("be.visible");
  });
  it("Should have 10 fishcards", () => {
    cy.visit("/");
    cy.get(".fish-card").should("have.length", 10);
  });
});
