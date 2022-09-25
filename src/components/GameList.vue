<template>
  <v-list class="v-list">
    <v-list-item
      class="list-item-container"
      v-for="item in items"
      :key="item.text"
      @click="selectWorkout(item)"
      density="comfortable"
    >
      <div class="list-item">
        <div class="color-strip"></div>
        <div class="rest">{{ item.text }}</div>
      </div>
    </v-list-item>
  </v-list>
</template>

<script setup lang="ts">
import { ref } from "vue";

const items = ref([
  { text: "Real-Time" },
  { text: "Audience" },
  { text: "Conversions" },
  { text: "Real-Time" },
  { text: "Audience" },
  { text: "Conversions" },
  { text: "Real-Time" },
  { text: "Audience" },
  { text: "Conversions" },
  { text: "Real-Time" },
  { text: "Audience" },
  { text: "Conversions" },
  { text: "Real-Time" },
  { text: "Audience" },
  { text: "Conversions" },
  { text: "Real-Time" },
  { text: "Audience" },
  { text: "Conversions" },
  { text: "Real-Time" },
  { text: "Audience" },
  { text: "Conversions" },
  { text: "Real-Time" },
  { text: "Audience" },
  { text: "Conversions" },
]);
</script>

<style scoped lang="scss">
.v-list {
  padding: 0px;
}
.list-item-container {
  padding: 0px;
  padding-inline-start: 0px !important;
  padding-inline-end: 0px !important;
  width: 100%;
  height: 3rem;
}
.list-item {
  display: grid;
  grid-template-columns: 20px 1fr;
}
.color-strip {
  background-color: rgb(var(--v-theme-chesswhite));
  width: 100%;
  height: 3rem;
}
.rest {
  background-color: rgb(var(--v-theme-draw));
  width: 100%;
}
</style>
