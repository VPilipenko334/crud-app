<script setup lang="ts">
import { useQuery } from "vue-query";
import { findAll } from "../lib/API";

const { isLoading, error, data } = useQuery("findAll", () => findAll());
</script>

<template>
  <div>
    <div class="q-pa-md flex flex-center">
      <q-circular-progress v-if="isLoading" indeterminate size="50px" />
    </div>
    <q-banner
      v-if="error"
      inline-actions class="text-white bg-red">
      {{ error.response?.data?.message || error.message }}
    </q-banner>
  </div>
</template>

<style scoped></style>
