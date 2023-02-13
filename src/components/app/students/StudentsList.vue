<script lang="ts" setup>
const studentsState = ref<FirebaseDocModel<StudentModel>[]>();

StudentsService.onStudentsChange((data) => (studentsState.value = data));
</script>

<template>
  <a-row :gutter="[12, 12]">
    <a-col v-if="studentsState">
      <div v-for="student of studentsState" :key="student.id" span="24">
        <StudentCard :student="student" />
      </div>
    </a-col>
  </a-row>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { StudentModel } from "../../../models/students/student.model";
import { FirebaseDocModel } from "../../../models/utils/firebase/firebase-doc.model";
import { StudentsService } from "../../../services/app/students/students.service";
import StudentCard from "./StudentCard.vue";

export default defineComponent({ components: { StudentCard } });
</script>
