<template>
  <v-app>
    <v-main>
      <NavBar />
      <NavDrawer />
      <router-view class="rw" />
    </v-main>
  </v-app>
</template>

<script setup lang="ts">
import { defineComponent } from "vue";
import NavBar from "@/components/NavBar.vue";
import NavDrawer from "@/components/NavDrawer.vue";
</script>

<style lang="scss">
html {
  overflow-y: auto;
}
</style>
