<template>
  <v-navigation-drawer
    v-model="drawer"
    :rail="rail"
    permanent
    @click="rail = false"
    rail-width="56"
    color="primaryflat"
  >
    <v-list density="compact" nav>
      <v-list-item
        prepend-icon="mdi-checkerboard"
        title="Game History"
        value="home"
        @click="$router.push('/gamehistory')"
      >
      </v-list-item>
      <v-list-item
        prepend-icon="mdi-circle-slice-5"
        title="Statistics"
        value="account"
        @click="$router.push('/statistics')"
      ></v-list-item>
      <v-list-item
        prepend-icon="mdi-account-group-outline"
        title="Users"
        value="users"
      ></v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script setup lang="ts">
import { ref } from "vue";

const drawer = ref(true);
const rail = ref(true);
</script>

<style scoped lang="scss">
.rl {
  height: 100%;
  width: 100%;
}
</style>
