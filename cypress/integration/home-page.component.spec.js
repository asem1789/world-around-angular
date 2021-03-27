describe("Home page testing with its process", () => {
  it("Visting Home page, should have title `World AROUND`", () => {
    cy.visit("/");
    cy.get(".logo").contains("WORLD AROUND");
  });

  it("Search by name should be Successful", () => {
    cy.visit("/")
      .get(".input-search")
      .type("Palesti")
      .get("app-card-country")
      .contains("Palestine");
  });

  it("Filter By Region should work as expected", () => {
    cy.visit("/")
      .get(".select-input")
      .click()
      .get("[data-value=americas]")
      .click()
      .get("app-card-country")
      .contains("United States of America");
  });

  it("Shuld navigate into detail page when click on Afghanistan cuntry", () => {
    cy.visit("/").get("app-card-country").contains("Afghanistan").click();
    cy.url().then(($url) => {
      if ($url.includes("/detail")) {
        cy.log("Success Naviage");
      } else {
        cy.log("No");
      }
    });
  });
});
