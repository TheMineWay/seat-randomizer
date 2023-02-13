<script lang="ts" setup>
import { computed, defineProps } from "vue";
import { AssignedStudentModel } from "../../../models/students/assigned-student.model";
import { StudentModel } from "../../../models/students/student.model";
import { FirebaseDocModel } from "../../../models/utils/firebase/firebase-doc.model";
import { StudentSitesService } from "../../../services/app/sites/student-sites.service";
import { ColorHelper } from "../../../services/helpers/color.helper";
import AssignSeatButton from "./AssignSeatButton.vue";

type Props = {
  students: FirebaseDocModel<StudentModel>[];
  assignedStudents: FirebaseDocModel<AssignedStudentModel>[];
  number: number;
};

const props = defineProps<Props>();

const onAssignSite = async (student: FirebaseDocModel<StudentModel>) => {
  await StudentSitesService.updateStudentSite(student, props.number);
};

const student = computed(() =>
  props.students.find(
    (student) =>
      student.id ===
      props.assignedStudents.find((s) => s.data.position === props.number)?.data
        .studentId
  )
);
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
        {{ student?.data.name }}
      </a-col>
    </a-row>
  </div>
  <div v-else>
    <AssignSeatButton
      :students="props.students ?? []"
      :assigned-students="props.assignedStudents.map((d) => d.data)"
      :on-assign="onAssignSite"
    />
  </div>
</template>
