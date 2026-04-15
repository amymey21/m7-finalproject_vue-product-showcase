<script setup>
import ProductCard from './ProductCard.vue';
import { onMounted, computed } from 'vue';
import { useStore } from 'vuex';

const store = useStore()

onMounted(() => {
  store.dispatch('products/fetchProducts')
})

const products = computed(() => store.getters['products/allProducts']);
const loading = computed(() => store.state.products.loading);
const error = computed(() => store.state.products.error);

// Categoría seleccionada desde VUEX
const selectedCategory = computed(() => store.getters['filters/currentCategory']);

// Productos filtrados según la categoría seleccionada
const filteredProducts = computed(() => {
  // const all = store.getters['products/allProducts']
  if (!selectedCategory.value) return products.value
  return products.value.filter(product => product.category === selectedCategory.value)
})
</script>

<template>
  <div>
    <p v-if="loading">Cargando productos...</p>
    <p v-else-if="error">{{ error }}</p>
    <p v-else-if="products.length === 0">No hay productos disponibles</p>

    <ProductCard v-else v-for="product in filteredProducts" :key="product.id" :product="product" />
  </div>
</template>

<style scoped>
* {
  box-sizing: border-box;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}

.selection {
  margin: 1rem;
  display: flex;
  justify-content: end;
}

label {
  margin-right: 0.5rem;
  font-size: 1rem;
  color: #333;
  align-items: center;
}

select {
  font-size: 0.75rem;
  padding: 0.25rem;
  color: #333;
  border: 1px darkcyan solid;
  border-radius: 4px;
}

option {
  padding: 0.25rem;
  font-size: 0.75rem;
}
</style>