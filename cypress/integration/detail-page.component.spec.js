describe("Detail page tests", () => {
  it("should fist the next broder countries when click on broder", () => {
    cy.visit("/countries/Afghanistan/detail").get(".border").first().click();
  });
});
