<script setup>
import { computed, ref } from "vue";
import { useRoute } from "vue-router";
import FilterBar from "./components/FilterBar.vue";
import FooterComp from "./components/FooterComp.vue";
import HeaderComp from "./components/HeaderComp.vue";
import { useTheme } from "vuetify";

const systemTheme = ref(useTheme().global.name.value);
const route = useRoute();
const showFilterBar = computed(() => route.name === "home");

const handleThemeChange = (value) => {
  systemTheme.value = value;
};
</script>

<template>
  <v-app :theme="systemTheme">
    <HeaderComp @change-theme="handleThemeChange" />
    <v-main>
      <FilterBar v-if="showFilterBar" />
      <router-view />
    </v-main>
    <FooterComp />
  </v-app>
</template>

<style scoped></style>
