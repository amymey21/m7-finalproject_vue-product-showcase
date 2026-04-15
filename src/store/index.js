import { createStore } from "vuex";
import products from "./modules/products";
import filters from "./modules/filters";
import favourites from "./modules/favourites";

const store = createStore({
  modules: {
    products,
    filters,
    favourites,
  },
});

export default store;
