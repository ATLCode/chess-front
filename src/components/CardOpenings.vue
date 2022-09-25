<template>
  <v-card class="co-container">
    <v-list>
      <v-list-item
        v-for="item in items"
        :key="item.text"
        @click="selectWorkout(item)"
      >
        <div class="list-item">
          <div>{{ item.text }}</div>
          <div><v-checkbox hide-details=""></v-checkbox></div>
        </div>
      </v-list-item>
    </v-list>
  </v-card>
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
.co-container {
  display: grid;
  grid-template-rows: auto 1fr;
  padding: 0.5rem;
}
.list-item {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
}
</style>
