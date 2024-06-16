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
    cy.getById("fish-card").should("have.length", 10);
  });

  it("", () => {
    // ARRANGE & ACT
    cy.getById("add-fish").click();
    cy.get("#add-form").find('[name="title"]').type("En fulfin fisk");
    cy.get("#add-form").find('[name="image"]').type("http://");
    cy.get("#add-form").find("button").click();

    // ASSERT
    cy.get(".fish-card").first().should("have.length", 11);
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
