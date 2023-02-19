<script lang="ts" setup>
import { CloseOutlined } from "@ant-design/icons-vue";
import { defineProps, ref } from "vue";
import { StudentSitesService } from "../../../services/app/sites/student-sites.service";

type Props = {
  visible: boolean;
  onClose: () => void;
};

const unassignLoading = ref<boolean>(false);

const props = defineProps<Props>();

const unassign = async () => {
  try {
    unassignLoading.value = true;
    await StudentSitesService.deleteSitesAssignments();
    props.onClose();
  } catch (e) {
    console.error(e);
  }
  unassignLoading.value = false;
};
</script>

<template>
  <a-modal
    :footer="null"
    :visible="props.visible"
    @cancel="props.onClose"
    :title="$t('classViewer.unassignAll.confirmModal.Title')"
  >
    <a-button
      block
      danger
      type="primary"
      @click="unassign"
      :loading="unassignLoading"
      ><template #icon>
        <CloseOutlined />
      </template>
      {{ $t("classViewer.unassignAll.confirmModal.unassignBtn.Text") }}
    </a-button>
  </a-modal>
</template>
