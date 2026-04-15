export default {
  namespaced: true,
  state: {
    favs: [],
  },
  mutations: {
    ADD_FAVOURITE(state, product) {
      //Evitar duplicados
      if (!state.favs.find((product) => product.id === product.id)) {
        state.favs.push(product);
      }
    },
    REMOVE_FAVOURITE(state, productId) {
      state.favs = state.favs.filter((product) => product.id !== productId);
    },
  },
  getters: {
    allFavourites: (state) => state.favs,
    isFavourite: (state) => (id) =>
      state.favs.some((product) => product.id === id),
  },

  //   actions: {
  //     toggleFavs({ commit, state }, product) {
  //       if (state.favs.some((fav) => fav.id === product.id)) {
  //         commit("REMOVE_FAVOURITE", product.id);
  //       } else {
  //         commit("ADD_FAVOURITE", product);
  //       }
  //     },
  //   },
};
