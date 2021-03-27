describe("Detail_Page Integration tests", () => {
  it("Should go to the new countries when click on border, And go back when click on back button", () => {
    cy.visit("/countries/Afghanistan/detail")
      .get(".border")
      .first()
      .click()
      .get(".back")
      .click()
      .get(".back")
      .click();
  });
});
