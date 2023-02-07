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
    <ChildrenNamesList />
  </a-drawer>
</template>

<script lang="ts">
import { defineComponent, defineProps } from "vue";
import ChildrenNamesList from "./ChildrenNamesList.vue";

export default defineComponent({ components: { ChildrenNamesList } });
</script>
