<template>
  <v-card class="cf-container">
    <div>
      <v-text-field
        density="compact"
        variant="outlined"
        label="Search Game"
        append-inner-icon="mdi-magnify"
        single-line
        hide-details
      ></v-text-field>
    </div>
    <v-divider color="primarybg" vertical></v-divider>
    <div class="speed">
      <h4>Color</h4>
      <v-select
        density="compact"
        class="primary"
        variant="outlined"
        v-model="color"
        :items="colorOptions"
      ></v-select>
    </div>
    <v-divider color="primarybg" vertical></v-divider>
    <div class="speed">
      <h4>Result</h4>
      <v-select
        class="primary"
        density="compact"
        variant="outlined"
        v-model="result"
        :items="resultOptions"
      ></v-select>
    </div>
    <v-divider color="primarybg" vertical></v-divider>
    <div class="speed">
      <h4>Ending</h4>
      <v-select
        class="primary"
        density="compact"
        variant="outlined"
        v-model="ending"
        :items="endingOptions"
      ></v-select>
    </div>
  </v-card>
</template>

<script setup lang="ts">
import { ref } from "vue";

const color = ref("Both");
const colorOptions = ["Both", "White", "Black"];
const result = ref("Both");
const resultOptions = ["Both", "Win", "Loss"];
const ending = ref("All");
const endingOptions = ["All", "Timeout", "Checkmate", "Resign", "Draw"];
</script>

<style scoped lang="scss">
.cf-container {
  height: 100%;
  display: grid;
  grid-template-columns: 1fr auto 1fr auto 1fr auto 1fr;
  grid-template-rows: 1fr;
  align-items: center;
  padding: 0.5rem;
  column-gap: 0.5rem;
}
.speed {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  text-align: center;
}
.primary {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
</style>
