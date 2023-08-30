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
        <div class="date-format">
          <div>{{ item.date }}</div>
          <div>{{ item.mode }}</div>
        </div>
        <div class="names">
          <div>{{ item.playername }}</div>
          <div>{{ item.opponentname }}</div>
        </div>
        <div class="elos">
          <div>{{ item.playerrating }}</div>
          <div>{{ item.opponentrating }}</div>
        </div>
      </div>
    </v-list-item>
  </v-list>
</template>

<script setup lang="ts">
import { ref } from "vue";

const listStyle = "asd"

const items = ref([
  {
    playercolor: "black",
    date: "29/09/2022",
    timecontrol: "5+5",
    mode: "Blitz",
    playername: "ATL",
    playerrating: "957",
    opponentname: "Hanivaz",
    opponentrating: "1134",
    eco: "",
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
    inaccuracies: "1",
    mistakes: "2",
    blunders: "3",
    acl: "102",
    result: "win",
    ending: "Win",
    webiste: "lichess",
  },
  {
    playercolor: "white",
    date: "28/09/2022",
    timecontrol: "5+5",
    mode: "Blitz",
    playername: "ATL",
    playerrating: "957",
    opponentname: "Verkku",
    opponentrating: "854",
    eco: "",
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
    inaccuracies: "4",
    mistakes: "5",
    blunders: "6",
    acl: "102",
    result: "draw",
    ending: "Draw",
    webiste: "chess.com",
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
  grid-template-columns: 20px 1fr 1fr 1fr;

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

.date-format .names .elos {
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
