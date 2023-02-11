<script lang="ts" setup>
const students = ref<FirebaseDocModel<StudentModel>[]>([]);
console.log({ students });

StudentsService.onStudentsChange((data) => {
  console.log(data);
  console.log("State should change");
  students.value = data;
  console.log("State should be changed");
});
</script>

<template>
  <ClassViewer :students="students" />
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import ClassViewer from "../../components/app/class/ClassViewer.vue";
import { StudentModel } from "../../models/students/student.model";
import { FirebaseDocModel } from "../../models/utils/firebase/firebase-doc.model";
import { StudentsService } from "../../services/app/students/students.service";
export default defineComponent({ components: { ClassViewer } });
</script>
