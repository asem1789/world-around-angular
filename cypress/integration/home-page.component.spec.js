describe("our coutries app test suite", () => {
  it("first test", () => {
    expect(true).to.equal(true);
  });

  it("Visting our app", () => {
    cy.visit("/");
    cy.get(".logo").contains("WORLD AROUND");
  });

  it("Type title then click card then go to the detail page", () => {
    cy.visit("/")
      .get(".input-search")
      .type("Palesti")
      .get("app-card-country")
      .click();
  });
});
