<template>
  <v-app-bar color="primaryflat" height="56">
    <template v-slot:image> </template>

    <v-app-bar-title>Chess Companion</v-app-bar-title>

    <v-spacer></v-spacer>

    <v-btn icon @click="$router.push('/settings')">
      <v-icon>mdi-cog</v-icon>
    </v-btn>

    <v-btn icon @click="$router.push('/')">
      <v-icon>mdi-logout</v-icon>
    </v-btn>
  </v-app-bar>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss"></style>
