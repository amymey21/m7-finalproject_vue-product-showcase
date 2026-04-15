<script setup>
import AppHeader from './components/AppHeader.vue';
import AppFooter from './components/AppFooter.vue';
import ProductList from './components/ProductList.vue';
import FilterBar from './components/FilterBar.vue';
</script>

<template>
  <div id="app">
    <AppHeader />
    <FilterBar />
    <ProductList />
    <AppFooter />
  </div>
</template>

<style scoped></style>