<script lang="ts" setup>
import { defineProps } from "vue";
import { StudentModel } from "../../../models/students/student.model";
import { FirebaseDocModel } from "../../../models/utils/firebase/firebase-doc.model";
import { ColorHelper } from "../../../services/helpers/color.helper";

type Props = {
  students?: FirebaseDocModel<StudentModel>[];
  number: number;
};

const props = defineProps<Props>();
</script>

<template>
  <div
    v-if="
      props.students &&
      (props.number || props.number === 0) &&
      props.students.length > props.number
    "
  >
    <a-row :gutter="[12, 12]">
      <a-col>
        <a-avatar
          :style="{
            'background-color': ColorHelper.generateColorFromString(
              props.students[props.number].id
            ),
          }"
          >{{
            props.students[props.number].data.name.substring(0, 1)
          }}</a-avatar
        >
      </a-col>
      <a-col>
        {{ props.students[props.number].data.name }}
      </a-col>
    </a-row>
  </div>
  <div v-else>
    <p>a</p>
  </div>
</template>
