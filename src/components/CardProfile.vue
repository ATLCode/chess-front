<template>
  <v-card class="cp-container">
    <div>
      <v-btn color="primary"><v-icon>mdi-cached</v-icon>Referesh</v-btn>
    </div>
    <v-divider color="primarybg"></v-divider>
    <div class="speed">
      <div class="header"><h3>Time Control</h3></div>
      <div
        class="speedchoice"
        :class="{ tactive: timeControl === 'ALL' }"
        @click="timeControl = 'ALL'"
      >
        <v-icon>mdi-all-inclusive</v-icon>All
      </div>
      <div
        class="speedchoice"
        :class="{ tactive: timeControl === 'BLITZ' }"
        @click="timeControl = 'BLITZ'"
      >
        <v-icon>mdi-fire</v-icon> Blitz
      </div>
      <div
        class="speedchoice"
        :class="{ tactive: timeControl === 'RAPID' }"
        @click="timeControl = 'RAPID'"
      >
        <v-icon>mdi-rabbit</v-icon>Rapid
      </div>
      <div
        class="speedchoice"
        :class="{ tactive: timeControl === 'CLASSICAL' }"
        @click="timeControl = 'CLASSICAL'"
      >
        <v-icon>mdi-tortoise</v-icon>Classical
      </div>
    </div>
  </v-card>
</template>

<script setup lang="ts">
import { ref } from "vue";
const timeControl = ref("ALL");
const color = ref("BOTH");
</script>

<style scoped lang="scss">
.cp-container {
  height: 100%;
  width: 100%;
  display: grid;
  grid-template-rows: auto auto 1fr;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  gap: 1rem;
  color: rgb(var(--v-theme-primary));
}
.header {
  display: flex;
  justify-content: center;
  align-items: center;
}

.speed {
  height: 100%;
  width: 100%;
  display: grid;
  grid-template-rows: auto 1fr 1fr 1fr 1fr;
  gap: 1rem;
}
.speedchoice {
  height: 100%;
  width: 100%;
  background-color: rgb(var(--v-theme-primarybg));
  color: rgb(var(--v-theme-primary));
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  border-radius: 4px;
  cursor: pointer;
}
.tactive {
  background-color: rgb(var(--v-theme-primarylight));
  color: white;
}
</style>
