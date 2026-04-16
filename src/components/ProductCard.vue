<script setup>
import { useStore } from "vuex";
import { defineProps, computed } from 'vue';


const props = defineProps({
  product: {
    type: Object,
    required: true,
  },
});

const store = useStore();

const isFavourite = computed(() =>
  store.getters["favourites/isFavourite"](props.product.id)
);

const toggleFavs = () => {
  store.dispatch("favourites/toggleFavs", props.product);
}
</script>

<template>
  <v-card class="text-center pt-4" variant="tonal">
    <v-img class="mx-3" :src="product.image" :alt="product.title" height="200px" />
    <v-card-title class="text-truncate"> {{ product.title }}</v-card-title>
    <v-card-text class="text-h5">US$ {{ product.price }}</v-card-text>
    <v-card-actions class="justify-center">
      <v-btn @click="toggleFavs"> Agregar a favoritos
        <v-icon color='red' :icon="isFavourite ? 'mdi-heart' : 'mdi-heart-outline'"></v-icon>
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<style scoped></style>
