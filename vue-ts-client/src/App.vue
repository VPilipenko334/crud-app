<script setup lang="ts">
import { RouterView } from "vue-router";
import { useQuasar } from "quasar";
import { useQueryProvider } from "vue-query";

const $q = useQuasar();
useQueryProvider();

const darkQuery = "(prefers-color-scheme: dark)";
const queryList = window.matchMedia(darkQuery);

if (queryList.matches) {
  $q.dark.set(true);
  //if the user has dark mode enabled; this will be set to true
}
queryList.addEventListener("change", (event) => {
  if (event.matches) {
    $q.dark.set(true);
  } else {
    $q.dark.set(false);
  }
});
</script>

<template>
  <q-toolbar class="bg-black text-white">
    <q-toolbar-title> Vue CRUD Client </q-toolbar-title>
    <q-btn flat round dense icon="more_vert" />
  </q-toolbar>

<q-layout>
  <q-page-container>
    <q-page class="container">
      <RouterView/>
    </q-page>
  </q-page-container>
</q-layout>>


</template>

<style scoped>
.container{
    width: 90%;
    margin: 0 auto;
  }
</style>
