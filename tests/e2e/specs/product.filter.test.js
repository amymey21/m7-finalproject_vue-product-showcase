// describe("Prodict Filter", () => {
//   beforeEach(() => {
//     cy.intercept("GET", "/api/products", { fixture: "products.json" });

//     it("filters products by category", () => {
//       cy.visit("/");

//       cy.get('[data-cy="category filter"]').click();
//       cy.contains("li", "Electronics").click();

//       cy.get('[data-cy="product-card"]').should("be.visible");
//     });
//   });
// });
