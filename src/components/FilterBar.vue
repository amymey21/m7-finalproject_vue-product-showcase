<script setup>
import { useStore } from "vuex";
import { computed } from "vue";

const store = useStore();

const selectedCategory = computed({
  get: () => store.getters["filters/currentCategory"],
  set: (value) => store.commit("filters/SET_CATEGORY", value ?? ""),
});

const categories = [
  { title: "Todas", value: "" },
  { title: "Electrónica", value: "electronics" },
  { title: "Joyería", value: "jewelery" },
  { title: "Ropa de hombre", value: "men's clothing" },
  { title: "Ropa de mujer", value: "women's clothing" },
];
</script>

<template>
  <v-container>
    <v-row justify="end">
      <v-col cols="12" sm="6" md="4">
        <v-select v-model="selectedCategory" :items="categories" item-title="title" item-value="value"
          label="Filtrar por categoría" variant="underlined" clearable />
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped></style>