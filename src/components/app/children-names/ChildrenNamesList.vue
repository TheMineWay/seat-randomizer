<script lang="ts" setup>
const names = ref(["Paco"]);
</script>

<template>
  <a-row :gutter="[12, 12]">
    <a-col v-for="(name, i) in names" :key="i" :span="24"
      ><p>{{ name }}</p></a-col
    >
  </a-row>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({});
</script>
