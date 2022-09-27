<template>
  <div class="settings-container">
    <v-card class="settings-card">
      <v-tabs
        v-model="tab"
        background-color="primarylight"
        slider-color="primary"
        class="tabs"
      >
        <v-tab value="1">Chess</v-tab>
        <v-tab value="2">Website</v-tab>
        <v-tab value="3">Change Password</v-tab>
      </v-tabs>

      <v-window v-model="tab" class="window">
        <v-window-item value="1" class="chess">
          <v-form class="chess-form">
            <v-text-field
              variant="outlined"
              label="Lichess Username"
            ></v-text-field>
          </v-form>
          <v-btn color="primary">Save</v-btn>
        </v-window-item>

        <v-window-item value="2"> Two </v-window-item>

        <v-window-item value="3"> Three </v-window-item>
      </v-window>
    </v-card>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const tab = ref(null);
</script>

<style scoped lang="scss">
.settings-container {
  height: calc(100vh - 56px);
  width: 100%;
  background-color: rgb(var(--v-theme-primarybg)) !important;
  display: flex;
  justify-content: center;
  align-items: center;
}
.settings-card {
  height: 90%;
  width: 90%;
}
.window {
  height: 100%;
  width: 100%;
}
.chess {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
}
.chess-form {
  height: 80%;
  width: 80%;
  display: flex;

  justify-content: center;
  align-items: center;
}
</style>
