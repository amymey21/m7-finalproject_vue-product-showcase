<script setup>
import { useStore } from 'vuex';
// import { defineProps, computed } from 'vue';
import { computed } from 'vue';

const props = defineProps({
  product: {
    type: Object,
    required: true,
  },
});

const store = useStore()

const isFavourite = computed(() =>
  store.getters['favourites/isFavourite'](props.product.id)
);


function toggleFavourite() {
  if (isFavourite.value) {
    store.commit('favourites/removeFavourite', props.product.id);
  } else {
    store.commit('favourites/addFavourite', props.product);
  }
}
</script>

<template>
  <div class="card">
    <img :src="product.image" :alt="product.title" />
    <h3> {{ product.title }} </h3>
    <p>US$ {{ product.price }} </p>
    <button @click="toggleFavourite">
      {{ isFavourite ? 'Remove from Favourites' : 'Add to Favourites' }}
    </button>
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