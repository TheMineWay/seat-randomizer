<script lang="ts" setup>
import { PlusOutlined } from "@ant-design/icons-vue";
import { ref, defineProps } from "vue";
import { AssignedStudentModel } from "../../../models/students/assigned-student.model";
import { StudentModel } from "../../../models/students/student.model";
import { FirebaseDocModel } from "../../../models/utils/firebase/firebase-doc.model";
import { ColorHelper } from "../../../services/helpers/color.helper";

type Props = {
  students: FirebaseDocModel<StudentModel>[];
  assignedStudents: AssignedStudentModel[];
  onAssign: (student: FirebaseDocModel<StudentModel>) => void;
};

const props = defineProps<Props>();

const drawerVisibilityState = ref<boolean>(false);

const onAddBtnClick = () => (drawerVisibilityState.value = true);
const onCloseDrawerClick = () => (drawerVisibilityState.value = false);
</script>

<style lang="scss" scoped>
div.center {
  display: flex;
  width: 100%;
  justify-content: center;
}
</style>

<template>
  <div class="center">
    <a-button type="primary" class="btn" @click="onAddBtnClick">
      <template #icon><PlusOutlined /></template
    ></a-button>
  </div>
  <a-drawer
    :visible="drawerVisibilityState"
    @close="onCloseDrawerClick"
    :title="$t('classViewer.assignSiteDrawer.Title')"
  >
    <a-row
      :gutter="[12, 12]"
      v-for="student of props.students.filter(
        (s) => !assignedStudents.map((as) => as.studentId).includes(s.id)
      )"
      :key="student.id"
    >
      <a-col span="24">
        <a-card hoverable @click="() => props.onAssign(student)">
          <a-space>
            <a-avatar
              :style="{
                'background-color': ColorHelper.generateColorFromString(
                  student.id
                ),
              }"
              >{{ student.data.name.substring(0, 1) }}</a-avatar
            >
            <span>{{ student.data.name }}</span>
          </a-space>
        </a-card>
      </a-col>
    </a-row>
  </a-drawer>
</template>
