<script lang="ts" setup>
const studentsState = ref<StudentsModel>();

StudentsService.onStudentsChange((data) => (studentsState.value = data));
</script>

<template>
  <a-row :gutter="[12, 12]">
    <a-col
      :v-if="studentsState?.names"
      v-for="(name, i) in studentsState?.names"
      :key="i"
      :span="24"
      ><p>{{ name }}</p></a-col
    >
  </a-row>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { StudentsModel } from "../../../models/students/students.model";
import { StudentsService } from "../../../services/app/students/students.service";

export default defineComponent({});
</script>
