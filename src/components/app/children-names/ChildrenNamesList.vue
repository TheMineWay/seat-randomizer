<script lang="ts" setup>
const studentsState = ref<StudentModel[]>();

StudentsService.onStudentsChange((data) => (studentsState.value = data));
</script>

<template>
  <a-row :gutter="[12, 12]">
    <a-col
      :v-if="studentsState"
      v-for="({ name }, i) of studentsState"
      :key="i"
      :span="24"
      ><p>{{ name }}</p></a-col
    >
  </a-row>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { StudentModel } from "../../../models/students/student.model";
import { StudentsService } from "../../../services/app/students/students.service";

export default defineComponent({});
</script>
