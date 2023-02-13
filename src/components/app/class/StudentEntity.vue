<script lang="ts" setup>
import { DeleteOutlined } from "@ant-design/icons-vue";
import { computed, defineProps, ref } from "vue";
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
  enableDelete: boolean;
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

const deleteLoading = ref<boolean>(false);

const onDelete = async () => {
  try {
    deleteLoading.value = true;
    await StudentSitesService.deleteSiteAssignment(props.number);
  } catch (e) {
    console.error(e);
  }
  deleteLoading.value = false;
};
</script>

<template>
  <div class="student-entity">
    <div v-if="student">
      <a-row :gutter="[12, 12]" justify="center">
        <a-col span="24" class="x-center">
          <a-avatar
            :style="{
              'background-color': ColorHelper.generateColorFromString(
                student.id
              ),
            }"
            >{{ student.data.name.substring(0, 1) }}</a-avatar
          >
        </a-col>
        <a-col span="24" class="x-center">
          {{ student?.data.name }}
        </a-col>
        <a-col span="24" class="x-center">
          <a-button
            danger
            type="primary"
            @click="onDelete"
            :loading="deleteLoading"
            :disabled="!props.enableDelete"
            ><template #icon><DeleteOutlined /></template
          ></a-button>
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
  </div>
</template>

<style lang="scss" scoped>
div.student-entity {
  width: 100%;
}
div.x-center {
  display: flex;
  justify-content: center;
}
</style>
