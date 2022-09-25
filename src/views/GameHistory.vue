<template>
  <div class="gh-container">
    <CardProfile class="card-profile" />
    <Overview class="overview" />
    <CardOpenings class="card-openings" />
    <GameFilter class="game-filter" />
    <GameList class="game-list" />
  </div>
</template>

<script setup lang="ts">
import Overview from "@/components/Overview.vue";
import CardProfile from "@/components/CardProfile.vue";
import CardOpenings from "@/components/CardOpenings.vue";
import GameList from "@/components/GameList.vue";
import GameFilter from "@/components/GameFilter.vue";
</script>

<style scoped lang="scss">
.gh-container {
  background-color: rgb(var(--v-theme-primarybg)) !important;
  display: grid;
  height: 100%;
  width: 100%;
  grid-template-columns: 1fr 3fr;
  grid-template-rows: 1fr 0.35fr 4fr;
  grid-template-areas:
    "CardProfile Overview"
    "CardProfile GameFilter"
    "CardOpenings GameList";
  padding: 1rem;
  gap: 1rem;
}
.card-profile {
  grid-area: CardProfile;
}
.overview {
  grid-area: Overview;
}
.card-openings {
  grid-area: CardOpenings;
}
.game-filter {
  grid-area: GameFilter;
}
.game-list {
  grid-area: GameList;
}
</style>
