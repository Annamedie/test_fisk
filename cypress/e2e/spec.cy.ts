// 1. Användaren besöker sidan och ser saker och tar bort en fisk
// 2. Användaren besöker sidan och skapar en ny fisk....
// 3. Användaren besöker sidan och klickar sig in på en specifik fisk?

//cy.get('form').find('img').should('have.attr', 'src', 'My-Logo')
describe("Visit the Startpage and deletes a fish", () => {
  //innan varje test körs detta
  beforeEach(() => {
    cy.task("reseed");
    cy.visit("/");
  });
  it("Should visit the startpage see content and delete a fish", () => {
    cy.get("h1")
      .contains("Welcome to the ugly but lovely fish site!")
      .should("be.visible");
    cy.get("header").should("be.visible").contains("Ugly fish");
    cy.get("footer").should("be.visible").contains("©️Not so pretty fish");
    cy.getById("add-fish-button").should("be.visible");
    cy.getById("fish-card").should("have.length", 2);
    cy.getById("fish-card")
      .first()
      .within(() => {
        cy.get("h2").contains("Frilled Shark");
        cy.get("img").should("be.visible");
        cy.getById("fish-length").contains("5 dm");
        cy.getById("fish-weight").contains("3 kg");
        cy.get("button").contains("Visit the fish").should("be.visible");
        cy.get("button").contains("Delete").click();
      });
    cy.getById("fish-card").should("have.length", 1);
  });
});
describe("Visit the Startpage and adds a fish", () => {
  beforeEach(() => {
    cy.task("reseed");
    cy.visit("/");
  });
  it("Should fill in form and create a new fish", () => {
    // ARRANGE & ACT
    cy.getById("add-fish-button").click();
    cy.get("h2").contains("Add your ugly fish to the collection");
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
    cy.getById("fish-card").first().find("#fish-length").contains("10 dm");
    cy.getById("fish-card").first().find("#fish-weight").contains("5 kg");
    cy.getById("fish-card").first().find("img");
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

describe("Visit a page of a fish and press a button to decide if ugly or not", () => {
  beforeEach(() => {
    cy.task("reseed");
    cy.visit("/");
  });
  it("Should visit a fishPage and interact with button", () => {
    cy.getById("fish-card")
      .last()
      .within(() => {
        cy.get("button").contains("Visit the fish").click();
      });
    cy.url().should("include", "/fishPage/1");
    cy.getById("fish-card-page").should("be.visible");
    cy.get("img").should("be.visible");
    cy.getById("fish-name").contains("Blobfish");
    cy.getById("fish-boolean").contains("Ugliest");
    cy.getById("fish-weight").contains("5 kg");
    cy.getById("fish-length").contains("10 dm");
    cy.getById("ugly-button").contains("Nah you are cute!").click();
    cy.getById("fish-boolean").contains("Kinda cute");
    cy.getById("ugly-button").contains("Kinda ugly not gonna lie").click();
    cy.getById("fish-boolean").contains("Ugliest");
    cy.get("header").contains("Ugly fish").click();
    cy.url().should("include", "/");
    cy.visit("/fishPage/20");
    cy.get("h3").contains("Fish not found");
    cy.get("header").contains("Ugly fish").click();
    cy.url().should("include", "/");
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
