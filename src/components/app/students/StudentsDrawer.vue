<script lang="ts" setup>
type Props = {
  visible: boolean;
  onClose: () => void;
};

const props = defineProps<Props>();
</script>

<template>
  <a-drawer
    :visible="props.visible"
    @close="props.onClose"
    :title="$t('studentsDrawer.Title')"
  >
    <a-row :gutter="[12, 12]">
      <a-col span="24">
        <AddStudentForm />
      </a-col>
      <a-divider />
      <a-col span="24">
        <StudentsList />
      </a-col>
    </a-row>
  </a-drawer>
</template>

<script lang="ts">
import { defineComponent, defineProps } from "vue";
import AddStudentForm from "./AddStudentForm.vue";
import StudentsList from "./StudentsList.vue";

export default defineComponent({
  components: { StudentsList, AddStudentForm },
});
</script>
