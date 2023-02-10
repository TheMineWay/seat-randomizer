<script lang="ts" setup>
import { PlusOutlined } from "@ant-design/icons-vue";
import { defineComponent, ref } from "@vue/runtime-dom";
import { StudentModel } from "../../../models/students/student.model";

const newStudentFormState = ref<StudentModel>();
const errorCode = ref<string>();

const onSubmit = () => {
  if (!newStudentFormState.value) return;
  const { name } = newStudentFormState.value;
  if (name.length < 2 || name.length > 64) {
    errorCode.value = "nameLength";
    return;
  }

  newStudentFormState.value = undefined;
};
</script>

<template>
  <a-form :model="newStudentFormState" @submit="onSubmit" autocomplete="off">
    <a-row :gutter="[6, 6]">
      <a-col span="24">
        <a-form-item name="name">
          <a-input showCount allowClear />
        </a-form-item>
      </a-col>
      <a-col span="24">
        <a-button block html-type="submit" type="primary"
          >{{ $t("studentsDrawer.addForm.fields.submit.Label") }}
          <template #icon>
            <PlusOutlined />
          </template>
        </a-button>
      </a-col>
      <a-col span="24">
        <a-alert
          :v-if="errorCode"
          :title="$t('errors.Title')"
          :message="$t(`studentsDrawer.addForm.errors.${errorCode}.Text`)"
        />
      </a-col>
    </a-row>
  </a-form>
</template>

<script lang="ts">
export default defineComponent({ components: { PlusOutlined } });
</script>
