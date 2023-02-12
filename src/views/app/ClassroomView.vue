<script lang="ts" setup>
const students = ref<{ students: FirebaseDocModel<StudentModel>[] | null }>({
  students: null,
});
console.log({ students });

StudentsService.onStudentsChange(
  (data) => (students.value = { students: data })
);
</script>

<template>
  <ClassViewer
    v-if="students.students !== null"
    :students="students.students"
  />
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import ClassViewer from "../../components/app/class/ClassViewer.vue";
import { StudentModel } from "../../models/students/student.model";
import { FirebaseDocModel } from "../../models/utils/firebase/firebase-doc.model";
import { StudentsService } from "../../services/app/students/students.service";
export default defineComponent({ components: { ClassViewer } });
</script>
