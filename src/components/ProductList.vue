<script setup>
import ProductCard from './ProductCard.vue';
import { onMounted, ref } from 'vue';
import axios from 'axios';
import { computed } from 'vue';

const products = ref([]);
const loading = ref(true);
const error = ref(null);

const selectedCategory = ref(''); //muestra todo

const filteredProducts = computed(() => {
  if (!selectedCategory.value) {
    return products.value;
  }
  return products.value.filter(product => product.category === selectedCategory.value);
});

onMounted(async () => {
  try {
    const response = await axios.get('http://fakestoreapi.com/products')
    products.value = response.data;
  } catch (err) {
    error.value = 'Failed to load products. Please try again later.';
    console.error(err);
  } finally {
    loading.value = false;
  }
});
</script>

<template>
  <div>
    <div class="selection">
      <label for="category">Filtrar por categoría:</label>
      <select id="category" v-model="selectedCategory">
        <option value="">Todas</option>
        <option value="electronics">Electrónica</option>
        <option value="jewelery">Joyería</option>
        <option value="men's clothing">Ropa de hombre</option>
        <option value="women's clothing">Ropa de mujer</option>
      </select>
    </div>

    <p v-if="loading">Cargando productos...</p>
    <p v-else-if="error">{{ error }}</p>
    <!-- empty -->
    <p v-else-if="filteredProducts.length === 0">No hay productos disponibles</p>

    <ProductCard v-for="product in filteredProducts" :key="product.id" :product="product" />
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