// import apiClient from "@/api/apiClient";
import axios from "axios";

export default {
  namespaced: true,
  state: () => ({
    items: [],
    loading: false,
    error: null,
  }),

  mutations: {
    SET_PRODUCTS(state, apiProducts) {
      state.items = apiProducts;
    },
    SET_LOADING(state, apiLoading) {
      state.loading = apiLoading;
    },
    SET_ERROR(state, apiError) {
      state.error = apiError;
    },
  },
  actions: {
    async fetchProducts({ commit }) {
      commit("SET_LOADING", true);
      commit("SET_ERROR", null);
      try {
        // const response = await apiClient.get("/products");
        const response = await axios.get("https://fakestoreapi.com/products");
        console.log("Productos obtenidos:", response.data);
        commit("SET_PRODUCTS", response.data);
      } catch (err) {
        commit("SET_ERROR", "No se pudo cargar los productos");
      } finally {
        commit("SET_LOADING", false);
      }
    },
  },

  getters: {
    allProducts: (state) => state.items,
  },
};
