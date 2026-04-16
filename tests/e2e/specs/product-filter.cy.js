describe("Filtrado de productos", () => {
  beforeEach(() => {
    // Mock de productos para que el test no dependa de la API externa
    cy.intercept("GET", "https://fakestoreapi.com/products", {
      statusCode: 200,
      body: [
        {
          id: 1,
          title: "Auriculares Bluetooth",
          price: 50,
          category: "electronics",
          image: "https://example.com/electronics.jpg",
        },
        {
          id: 2,
          title: "Camiseta Mujer",
          price: 25,
          category: "women's clothing",
          image: "https://example.com/women.jpg",
        },
      ],
    }).as("getProducts");

    // Abre la aplicación y espera a que termine la carga inicial
    cy.visit("http://localhost:8080");
    cy.wait("@getProducts");
    cy.contains("Cargando productos...").should("not.exist");
  });

  it("shows rendered products", () => {
    // Verifica que se renderice al menos un producto del mock
    cy.contains("Auriculares Bluetooth").should("be.visible");
  });

  it("filters products by category", () => {
    // Selecciona la categoría "Electrónica" en el v-select
    cy.get(".v-select").click();
    cy.contains("Electrónica").click();

    // En UI no se muestra el nombre de categoría, se valida por títulos esperados
    cy.contains("Auriculares Bluetooth").should("be.visible");
    cy.contains("Camiseta Mujer").should("not.exist");
  });

  it("muestra mensaje de lista vacía si no hay productos en la categoría seleccionada", () => {
    // Selecciona la categoría "Ropa de niños" en el v-select
    cy.get(".v-select").click();
    cy.contains("Ropa de niños").click();

    // Verifica que se muestre el mensaje de lista vacía
    cy.contains("No hay productos disponibles").should("be.visible");
  });
});
