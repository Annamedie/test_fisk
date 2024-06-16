describe("Startpage", () => {
  //innan varje test körs detta
  beforeEach(() => {
    cy.task("reseed");
    cy.visit("/");
  });

  it("Should visit startPage and find a headline", () => {
    cy.get("h1")
      .contains("Welcome to the ugly but lovely fish site!")
      .should("be.visible");
  });

  it("Should have a header and footer", () => {
    cy.get("header").should("be.visible");
    cy.get("footer").should("be.visible");
  });

  it("Should have 10 fishcards", () => {
    cy.getById("fish-card").should("have.length", 2);
  });

  it("Should fill in form and create a new fish", () => {
    // ARRANGE & ACT
    cy.getById("add-fish-button").click();
    cy.getById("add-form").find("#name").type("En fulfin fisk");
    cy.getById("add-form").find("#weight").type("5");
    cy.getById("add-form").find("#length").type("10");
    cy.getById("add-form")
      .find("#image")
      .type("https://i.ibb.co/wJVjXkD/testfisk.jpg");
    cy.getById("add-form").submit();

    // ASSERT
    cy.getById("fish-card").should("have.length", 3);
    cy.getById("fish-card").first().find("h2").contains("En fulfin fisk");
  });
});

describe("Startpage (mobile)", () => {
  //innan varje test körs detta
  beforeEach(() => {
    cy.task("reseed");
    cy.viewport(360, 780);
    cy.visit("/");
  });
});
