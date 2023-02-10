<script lang="ts" setup>
const studentsState = ref<FirebaseDocModel<StudentModel>[]>();
console.log(studentsState);

StudentsService.onStudentsChange((data) => (studentsState.value = data));
</script>

<template>
  <a-row :gutter="[12, 12]">
    <a-col
      :v-if="studentsState"
      v-for="{ data: { name }, id } of studentsState"
      :key="id"
      span="24"
    >
      <a-card hoverable>
        <a-row :gutter="[12, 6]">
          <a-col>
            <a-avatar
              :style="{
                'background-color': ColorHelper.generateColorFromString(id),
              }"
              >{{ name.substring(0, 1) }}</a-avatar
            >
          </a-col>
          <a-col>
            <p>{{ name }}</p>
          </a-col>
        </a-row>
      </a-card>
    </a-col>
  </a-row>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { StudentModel } from "../../../models/students/student.model";
import { FirebaseDocModel } from "../../../models/utils/firebase/firebase-doc.model";
import { StudentsService } from "../../../services/app/students/students.service";
import { ColorHelper } from "../../../services/helpers/color.helper";

export default defineComponent({});
</script>
