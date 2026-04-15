export default {
  namespaced: true,
  state: () => ({
    selectedCategory: "",
  }),
  mutations: {
    SET_CATEGORY(state, category) {
      state.selectedCategory = category;
    },
  },
  getters: {
    currentCategory: (state) => state.selectedCategory,
  },
};

// currentCategory: (state, _getters, rootState) => {
//   return rootState.products.products.filter((product) => {
//     const selectedCategory =
//       !selectedCategory || product.category === state.selectedCategory;
//     return selectedCategory;
//   });
// },
