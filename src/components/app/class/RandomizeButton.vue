<script lang="ts" setup>
import { AssignedStudentModel } from "../../../models/students/assigned-student.model";
import { StudentModel } from "../../../models/students/student.model";
import { FirebaseDocModel } from "../../../models/utils/firebase/firebase-doc.model";
import { StudentSitesService } from "../../../services/app/sites/student-sites.service";
import { defineProps, ref } from "vue";

type Props = {
  students: FirebaseDocModel<StudentModel>[];
  studentSites: FirebaseDocModel<AssignedStudentModel>[];
};

const props = defineProps<Props>();

const modalVisible = ref<boolean>(false);

const showConfirmModal = () => (modalVisible.value = true);
const hideConfirmModal = () => {
  if (randomizeLoading.value) return;
  modalVisible.value = false;
};

const randomizeLoading = ref<boolean>(false);

const onRandomize = async () => {
  if (randomizeLoading.value) return;
  try {
    randomizeLoading.value = true;
    await StudentSitesService.assignRandomly(
      props.students,
      props.studentSites,
      40
    );
  } catch (e) {
    console.error(e);
  }
  randomizeLoading.value = false;
  hideConfirmModal();
};
</script>

<template>
  <a-button
    type="primary"
    @click="showConfirmModal"
    :loading="randomizeLoading"
    >{{ $t("classViewer.randomize.Text") }}</a-button
  >
  <a-modal
    :visible="modalVisible"
    :title="$t('classViewer.randomize.confirmModal.Title')"
    :footer="null"
    @cancel="hideConfirmModal"
  >
    <p>{{ $t("classViewer.randomize.confirmModal.Message") }}</p>
    <a-button @click="onRandomize" block type="primary">{{
      $t("classViewer.randomize.Text")
    }}</a-button>
  </a-modal>
</template>
