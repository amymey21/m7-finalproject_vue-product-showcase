<script setup>
import { useTheme } from "vuetify";
import { ref } from "vue";

const emits = defineEmits(["change-theme"]);
const systemTheme = useTheme().global.name.value;
const theme = ref(systemTheme);

const onClick = () => {
  theme.value = theme.value === "light" ? "dark" : "light";
  emits("change-theme", theme.value);
};
</script>

<template>
  <v-app-bar>
    <v-app-bar-title class="d-flex align-center" text="Product Showcase" />
    <v-btn :icon="theme === 'light' ? 'mdi-weather-night' : 'mdi-weather-sunny'" @click="onClick"></v-btn>
  </v-app-bar>
</template>

<style scoped></style>
