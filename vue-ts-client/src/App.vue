<script setup lang="ts">
import { RouterView } from 'vue-router';
import { useQuasar } from 'quasar';

const $q = useQuasar();

const result = window.matchMedia('(prefers-color-scheme: dark)');
if (result.matches) {
  $q.dark.set(true);
  //if the user has dark mode enabled; this will be set to true/ dark mode will turn on
}
console.log(result.matches);

</script>

<template>
  <RouterView />
</template>

<style scoped>
</style>
