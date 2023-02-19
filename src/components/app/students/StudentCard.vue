<script lang="ts" setup>
import { EditOutlined, SaveOutlined } from "@ant-design/icons-vue";
import { doc, getFirestore, updateDoc } from "@firebase/firestore";
import { defineProps, ref } from "vue";
import { StudentModel } from "../../../models/students/student.model";
import { FirebaseDocModel } from "../../../models/utils/firebase/firebase-doc.model";
import { ColorHelper } from "../../../services/helpers/color.helper";
import StudentEditModal from "./edit/StudentEditModal.vue";

type Props = {
  student: FirebaseDocModel<StudentModel>;
};
const props = defineProps<Props>();

const editModalVisibilityState = ref<boolean>(false);

const name = ref<string>(props.student.data.name);

const onSave = async () => {
  if (name.value?.length < 2) return;
  await updateDoc(doc(getFirestore(), "students", props.student.id), {
    name: name.value,
  });
};

const onEditClose = () => {
  editModalVisibilityState.value = false;
};

const onEditClick = () => {
  editModalVisibilityState.value = true;
};
</script>

<template>
  <StudentEditModal
    :visible="editModalVisibilityState"
    :student="props.student"
    :onClose="onEditClose"
  />
  <a-card hoverable>
    <a-row :gutter="[12, 6]">
      <a-col span="4">
        <a-avatar
          :style="{
            'background-color': ColorHelper.generateColorFromString(
              props.student.id
            ),
          }"
          >{{ props.student.data.name.substring(0, 1) }}</a-avatar
        >
      </a-col>
      <a-col span="12"> <a-input v-model:value="name" /></a-col>
      <a-col span="4">
        <a-button type="primary" block @click="onSave">
          <template #icon>
            <SaveOutlined />
          </template>
        </a-button>
      </a-col>
      <a-col span="4">
        <a-button type="default" block @click="onEditClick">
          <template #icon>
            <EditOutlined />
          </template>
        </a-button>
      </a-col>
    </a-row>
  </a-card>
</template>
