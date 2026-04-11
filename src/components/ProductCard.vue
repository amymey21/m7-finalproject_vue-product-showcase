<script setup>
import { onMounted } from 'vue';

defineProps({
  product: {
    type: Object,
    required: true
  }
});

onMounted(() => {
  console.log('ProductCard mounted');
});
</script>

<template>
  <div class="product-card">
    <h3>{{ product.name }}</h3>
    <p>{{ product.description }}</p>
    <span>{{ product.price }}</span>
  </div>
</template>

<style scoped>
.product-card {
  border: 1px solid #ccc;
  padding: 1rem;
  margin: 5rem;
}
</style>