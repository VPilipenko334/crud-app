<script setup lang="ts">
import { RouterView } from 'vue-router';
import { useQuasar } from 'quasar';

const $q = useQuasar();

const darkQuery = ('(prefers-color-scheme: dark)');
const queryList = window.matchMedia(darkQuery);

if (queryList.matches) {
  $q.dark.set(true);
  //if the user has dark mode enabled; this will be set to true/ dark mode will turn on
}
queryList.addEventListener('change', (event) => {
  if (event.matches) {
    $q.dark.set(true);
  } else {
    $q.dark.set(false);
  }
});

</script>

<template>
  <RouterView />
</template>

<style scoped>
</style>

