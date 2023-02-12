<script lang="ts" setup>
import { defineProps } from "vue";
import { StudentModel } from "../../../models/students/student.model";
import { FirebaseDocModel } from "../../../models/utils/firebase/firebase-doc.model";
import { ColorHelper } from "../../../services/helpers/color.helper";

type Props = {
  students: FirebaseDocModel<StudentModel>[];
  number: number;
};

const props = defineProps<Props>();

const student =
  props.students.length > props.number ? props.students[props.number] : null;
</script>

<template>
  <div v-if="student">
    <a-row :gutter="[12, 12]">
      <a-col>
        <a-avatar
          :style="{
            'background-color': ColorHelper.generateColorFromString(student.id),
          }"
          >{{ student.data.name.substring(0, 1) }}</a-avatar
        >
      </a-col>
      <a-col>
        {{ student.data.name }}
      </a-col>
    </a-row>
  </div>
  <div v-else>
    <p>a</p>
  </div>
</template>
