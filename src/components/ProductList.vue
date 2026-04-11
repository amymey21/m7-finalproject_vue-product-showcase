<script setup>
import ProductCard from './ProductCard.vue';

const products = [
  {
    id: 1,
    name: 'Laptop',
    description: 'Equipo portátil de alta gama',
    price: '$1.200.000'
  },
  {
    id: 2,
    name: 'Smartphone',
    description: 'Teléfono inteligente con pantalla OLED',
    price: '$800.000'
  },
  {
    id: 3,
    name: 'Tablet',
    description: 'Dispositivo táctil para entretenimiento y trabajo',
    price: '$600.000'
  }
]
</script>

<template>
  <div>
    <ProductCard v-for="product in products" :key="product.id" :product="product" />
  </div>
</template>

<style scoped></style>