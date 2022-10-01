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
        <div
          :class="{
            pcWhite: item.playercolor === 'white',
            pcBlack: item.playercolor === 'black',
          }"
        ></div>
        <div class="rest">
          <div class="date-format">
            <div>{{ item.date }}</div>
            <div>{{ item.timecontrol }}</div>
          </div>
          <v-divider vertical></v-divider>
          <div class="players">
            <div class="player-info">
              {{ item.playername }}({{ item.playerrating }})
            </div>
            <div class="player-info">
              {{ item.opponentname }}({{ item.opponentrating }})
            </div>
          </div>
          <v-divider vertical></v-divider>
          <div>
            <div>{{ item.openingname }}</div>
            <div>{{ item.openingvariation }}</div>
          </div>

          <v-divider vertical class="moves"></v-divider>
          <div class="m1">d4</div>
          <div class="m2">d5</div>
          <div>Nc3</div>
          <div>Nf6</div>
          <div>Nf3</div>
          <div>Bf5</div>
          <div>Ne5</div>
          <div>Nbd7</div>
          <div>Nxd7</div>
          <div>Qxd7</div>
          <div>g3</div>
          <div>O-O-O</div>
          <div>e3</div>
          <div>g6</div>
          <v-divider vertical></v-divider>
          <div>1.2</div>
          <v-divider vertical></v-divider>
          <div>105</div>
          <v-divider vertical></v-divider>
          <div>Resign</div>
        </div>
      </div>
    </v-list-item>
  </v-list>
</template>

<script setup lang="ts">
import { ref } from "vue";

const items = ref([
  {
    playercolor: "black",
    date: "29/09/2022",
    timecontrol: "5+5",
    playername: "ATL",
    playerrating: "957",
    opponentname: "Hanivaz",
    opponentrating: "1134",
    openingname: "Queen's Gambit Accepted",
    openingvariation: "Central,Variation, McDonnel Defense",
    move1: "d4",
    move2: "d4",
    move3: "d4",
    move4: "d4",
    move5: "d4",
    move6: "d4",
    move7: "d4",
    move8: "d4",
    move9: "d4",
    move10: "d4",
    move11: "d4",
    move12: "d4",
    move13: "d4",
    move14: "d4",
    openingscore: "1.5",
    acl: "102",
    result: "draw",
    ending: "Draw",
  },
  {
    playercolor: "white",
    date: "28/09/2022",
    timecontrol: "5+5",
    playername: "ATL",
    playerrating: "957",
    opponentname: "Verkku",
    opponentrating: "854",
    openingname: "French Defense",
    openingvariation: "Steinitz Attack",
    move1: "d4",
    move2: "d4",
    move3: "d4",
    move4: "d4",
    move5: "d4",
    move6: "d4",
    move7: "d4",
    move8: "d4",
    move9: "d4",
    move10: "d4",
    move11: "d4",
    move12: "d4",
    move13: "d4",
    move14: "d4",
    openingscore: "1.5",
    acl: "102",
    result: "draw",
    ending: "Draw",
  },
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
  height: 4rem;
}
.list-item {
  display: grid;
  grid-template-columns: 20px 1fr;
}
.pcBlack {
  background-color: rgb(var(--v-theme-chessblack));
  width: 100%;
  height: 4rem;
}
.pcWhite {
  background-color: rgb(var(--v-theme-chesswhite));
  width: 100%;
  height: 4rem;
}

.rest {
  background-color: rgb(var(--v-theme-draw));
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  gap: 0.5rem;
  padding: 10px;
}
.date-format {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.m1 {
  background-color: red;
}
.m2 {
  background-color: green;
}
</style>
