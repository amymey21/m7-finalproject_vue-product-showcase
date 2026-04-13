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
  <div>
    <div class="product-card ">
      <img :src="product.image" alt="Product Image" width="100" />
      <h3>{{ product.title }}</h3>
      <span>${{ product.price }}</span>
    </div>
  </div>
</template>

<style scoped>
.product-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 25%;
  max-width: 50%;
  border: 1px solid #7dbdc0;
  padding: 1rem;
  margin: 5rem;
}
</style>