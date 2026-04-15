<script setup>
import { useStore } from 'vuex'
import { computed } from 'vue'

const store = useStore()
const selectedCategory = computed(() => store.getters['filters/currentCategory'])

function updateCategory(event) {
  store.commit('filters/setCategory', event.target.value)
}
</script>
<template>
  <div>
    <label for="category">Filtrar por categoría:</label>
    <select id="category" :value="selectedCategory" @change="updateCategory">
      <option value="">Todas</option>
      <option value="electronics">Electrónica</option>
      <option value="jewelery">Joyas</option>
      <option value="men's clothing">Ropa de hombre</option>
      <option value="women's clothing">Ropa de mujer</option>
    </select>
  </div>
</template>
