import { mount } from "@vue/test-utils";
import ProductList from "@/components/ProductList.vue";
import store from "@/store";

// Stubs de Vuetify para que Jest no se bloquee
const vuetifyStubs = {
  "v-container": { template: "<div><slot /></div>" },
  "v-row": { template: "<div><slot /></div>" },
  "v-col": { template: "<div><slot /></div>" },
  ProductCard: { template: "<div data-test='product-card-stub' />" },
};

describe("ProductList.vue", () => {
  let dispatchSpy;

  beforeEach(() => {
    dispatchSpy = jest.spyOn(store, "dispatch").mockResolvedValue();
    store.state.products.items = [];
    store.state.products.loading = false;
    store.state.products.error = null;
  });

  afterEach(() => {
    dispatchSpy.mockRestore();
  });

  // Error si API falla
  it("shows error message if API call fails", () => {
    // Simula un error en la API
    store.state.products.error = "Failed to fetch products";
    store.state.products.loading = false;
    store.state.products.items = [];

    const wrapper = mount(ProductList, {
      global: {
        plugins: [store],
        stubs: vuetifyStubs,
      },
    });

    expect(wrapper.text()).toContain("Failed to fetch products");
  });

  it("show loading state when products are being fetched", () => {
    store.state.products.loading = true;
    store.state.products.error = null;

    const wrapper = mount(ProductList, {
      global: {
        plugins: [store],
        stubs: vuetifyStubs,
      },
    });

    expect(wrapper.text()).toContain("Cargando productos...");
  });

  it("shows empty list message when no products are available", () => {
    store.state.products.items = [];
    store.state.products.error = null;
    store.state.products.loading = false;

    const wrapper = mount(ProductList, {
      global: {
        plugins: [store],
        stubs: vuetifyStubs,
      },
    });

    expect(wrapper.text()).toContain("No hay productos disponibles");
  });
});
