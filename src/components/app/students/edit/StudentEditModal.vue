<script lang="ts" setup>
import { DeleteOutlined } from "@ant-design/icons-vue";
import { addDays } from "date-fns";
import { deleteDoc, doc, getFirestore, setDoc } from "firebase/firestore";
import { defineProps, ref } from "vue";
import { StudentModel } from "../../../../models/students/student.model";
import { FirebaseDocModel } from "../../../../models/utils/firebase/firebase-doc.model";
import { StudentsService } from "../../../../services/app/students/students.service";

type Props = {
  visible: boolean;
  onClose: () => void;
  student: FirebaseDocModel<StudentModel>;
};

const props = defineProps<Props>();

const name = ref<string>(props.student.data.name);
const deleteModalVisibilityState = ref<boolean>(false);
const isDeletingState = ref<boolean>(false);
const isDisablingState = ref<boolean>(false);

const onDelete = async () => {
  try {
    isDeletingState.value = true;
    await deleteDoc(doc(getFirestore(), "students", props.student.id));
    deleteModalVisibilityState.value = false;
    isDeletingState.value = false;
    props.onClose();
  } catch (e) {
    console.error(e);
  }
};

const onDeleteClick = () => {
  deleteModalVisibilityState.value = true;
};

const disableTilTomorrow = async () => {
  try {
    isDisablingState.value = true;
    setDoc(
      doc(getFirestore(), "students", props.student.id),
      {
        disabled_until: addDays(new Date(Date.now()), 1),
      },
      {
        merge: true,
      }
    );
  } catch (e) {
    console.error(e);
  }
  isDisablingState.value = false;
};

const reEnable = async () => {
  try {
    isDisablingState.value = true;
    setDoc(
      doc(getFirestore(), "students", props.student.id),
      {
        disabled_until: null,
      },
      {
        merge: true,
      }
    );
  } catch (e) {
    console.error(e);
  }
  isDisablingState.value = false;
};
</script>

<template>
  <a-modal
    :footer="null"
    v-model:visible="deleteModalVisibilityState"
    closable
    :title="$t('studentsDrawer.deleteModal.Title')"
  >
    <a-row :gutter="[6, 6]">
      <a-col span="24">
        <p>{{ $t("studentsDrawer.deleteModal.Text", { name }) }}</p>
      </a-col>
      <a-col span="24">
        <a-button
          block
          type="danger"
          :loading="isDeletingState"
          @click="onDelete"
          >{{ $t("studentsDrawer.deleteModal.Delete") }}</a-button
        >
      </a-col>
    </a-row>
  </a-modal>
  <a-modal
    :title="$t('studentsEditModal.Title')"
    :footer="null"
    :visible="visible"
    @cancel="props.onClose"
  >
    <a-row :gutter="[12, 12]">
      <a-col :xs="24" :md="12">
        <a-button
          v-if="!StudentsService.isStudentDisabled(props.student.data)"
          block
          @click="disableTilTomorrow"
          :loading="isDisablingState"
          >{{ $t("studentsEditModal.disableTilTomorrow.Text") }}</a-button
        >
        <a-button v-else block @click="reEnable">
          {{ $t("studentsEditModal.enable.Text") }}
        </a-button>
      </a-col>
    </a-row>
    <a-divider />
    <a-button type="danger" block @click="onDeleteClick">
      <template #icon> <DeleteOutlined /> </template
      >{{ $t("studentsEditModal.deleteBtn.Text") }}</a-button
    >
  </a-modal>
</template>
