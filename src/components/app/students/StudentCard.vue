<script lang="ts" setup>
import { DeleteOutlined, SaveOutlined } from "@ant-design/icons-vue";
import { deleteDoc, doc, getFirestore, updateDoc } from "@firebase/firestore";
import { defineProps, ref } from "vue";
import { StudentModel } from "../../../models/students/student.model";
import { FirebaseDocModel } from "../../../models/utils/firebase/firebase-doc.model";
import { ColorHelper } from "../../../services/helpers/color.helper";

type Props = {
  student: FirebaseDocModel<StudentModel>;
};
const props = defineProps<Props>();

const name = ref<string>(props.student.data.name);

const onSave = async () => {
  await updateDoc(doc(getFirestore(), "students", props.student.id), {
    name: name.value,
  });
};

const onDelete = async () => {
  await deleteDoc(doc(getFirestore(), "students", props.student.id));
};
</script>

<template>
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
        <a-button type="danger" block @click="onDelete">
          <template #icon>
            <DeleteOutlined />
          </template>
        </a-button>
      </a-col>
    </a-row>
  </a-card>
</template>
