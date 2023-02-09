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
    :title="$t('namesDrawer.Title')"
  >
    <StudentsList />
  </a-drawer>
</template>

<script lang="ts">
import { defineComponent, defineProps } from "vue";
import StudentsList from "./StudentsList.vue";

export default defineComponent({ components: { StudentsList } });
</script>
