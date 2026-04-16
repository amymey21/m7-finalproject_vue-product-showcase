import { mount } from "@vue/test-utils";
import ProductCard from "@/components/ProductCard.vue";
import store from "@/store";

// Stubs de Vuetify para que Jest no se bloquee
const vuetifyStubs = {
  "v-card": { template: "<div><slot /></div>" },
  "v-img": { template: '<img :src="src" />', props: ["src"] },
  "v-card-title": { template: "<div><slot /></div>" },
  "v-card-text": { template: "<div><slot /></div>" },
  "v-card-actions": { template: "<div><slot /></div>" },
  "v-btn": { template: "<button @click=\"$emit('click')\"><slot /></button>" },
  "v-icon": { template: "<span />" },
};

describe("ProductCard.vue", () => {
  const product = {
    id: 1,
    title: "Test Product",
    price: 19.99,
    image: "test-image.jpg",
  };

  // PRUEBA UNITARIA 1
  it("renders product details correctly", () => {
    const wrapper = mount(ProductCard, {
      props: { product },
      global: {
        plugins: [store],
        stubs: vuetifyStubs,
      },
    });

    // Verifica que el título aparece
    expect(wrapper.text()).toContain(product.title);

    // Verifica que el precio aparece
    expect(wrapper.text()).toContain(`US$ ${product.price}`);

    // Verifica que la imagen se renderiza
    const img = wrapper.find("img");
    expect(img.exists()).toBe(true);
    expect(img.attributes("src")).toBe(product.image);
  });
});
