<script setup>
import ProductCard from "./ProductCard.vue";
import { onMounted, computed } from "vue";
import { useStore } from "vuex";

const store = useStore();

onMounted(() => {
  store.dispatch("products/fetchProducts");
});

const products = computed(() => store.getters["products/allProducts"]);
const loading = computed(() => store.state.products.loading);
const error = computed(() => store.state.products.error);

// Categoría seleccionada desde VUEX
const selectedCategory = computed(
  () => store.getters["filters/currentCategory"]
);

// Productos filtrados según la categoría seleccionada
const filteredProducts = computed(() => {
  if (!selectedCategory.value) return products.value;
  return products.value.filter(
    (product) => product.category === selectedCategory.value
  );
});
</script>

<template>
  <v-container>
    <v-row v-if="loading" justify="center">
      <v-col cols="12" class="text-center">
        <p>Cargando productos...</p>
      </v-col>
    </v-row>

    <v-row v-else-if="error" justify="center">
      <v-col cols="12" class="text-center">
        <p>{{ error }}</p>
      </v-col>
    </v-row>

    <v-row v-else-if="filteredProducts.length === 0" justify="center">
      <v-col cols="12" class="text-center">
        <p>No hay productos disponibles</p>
      </v-col>
    </v-row>

    <v-row v-else>
      <v-col v-for="product in filteredProducts" :key="product.id" cols="12" sm="6" md="4" lg="3">
        <ProductCard :product="product" />
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped></style>
