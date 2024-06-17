// 1. Användaren besöker sidan och ser saker
// 2. Användaren besöker sidan och skapar en ny fisk....
// 3. Användaren besöker sidan och klickar sig in på en specifik fisk?
//cy.get('form').find('img').should('have.attr', 'src', 'My-Logo')
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

  it("Should have 2 fishcards", () => {
    cy.getById("fish-card").should("have.length", 2);
  });

  it("Should have a button to add a fish", () => {});
  it("Should be able to delete a fish", () => {
    cy.getById("fish-card")
      .first()
      .within(() => {
        cy.get("button").contains("Delete").click();
      });

    cy.getById("fish-card").should("have.length", 1);
  });

  //flytta till eget test?
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

describe("Error handling on the form", () => {
  beforeEach(() => {
    cy.task("reseed");
    cy.visit("/fishForm");
    cy.getById("add-form");
  });
  it("Should show error messages for required fields", () => {
    cy.getById("add-form").find('button[type="submit"]').click();
    cy.getById("name-error").contains("This field is required");
    cy.getById("weight-error").contains("This field is required");
    cy.getById("length-error").contains("This field is required");
    cy.getById("image-error").contains("This field is required");
  });

  it("Should show error messages for the weight and length fields if less or equal to zero", () => {
    cy.getById("add-form").find("#weight").type("0");
    cy.getById("add-form").find("#length").type("0");
    cy.getById("add-form").find('button[type="submit"]').click();
    cy.getById("weight-error").contains("Must be greater than 0");
    cy.getById("length-error").contains("Must be greater than 0");
  });
});

describe("FishPage", () => {
  beforeEach(() => {
    cy.task("reseed");
    cy.visit("/");
  });
  it("Should visit a fishPage", () => {
    cy.getById("fish-card")
      .last()
      .within(() => {
        cy.get("button").contains("Visit the fish").click();
      });
    cy.url().should("include", "/fishPage/1");
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
