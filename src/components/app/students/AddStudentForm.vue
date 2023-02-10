<script lang="ts" setup>
import { PlusOutlined } from "@ant-design/icons-vue";
import { addDoc, collection, getFirestore } from "@firebase/firestore";
import { ref } from "@vue/runtime-dom";

const newStudentNameState = ref<string>();
const errorCode = ref<string>();

const onSubmit = async () => {
  errorCode.value = undefined;
  const name = newStudentNameState.value;
  if (!name) return;

  if (name.length < 2 || name.length > 64) {
    errorCode.value = "nameLength";
    return;
  }

  try {
    await addDoc(collection(getFirestore(), "students"), {
      name,
    });
  } catch (e) {
    console.error(e);
  }

  newStudentNameState.value = undefined;
};
</script>

<template>
  <a-form @submit="onSubmit" autocomplete="off" layout="vertical">
    <a-row :gutter="[6, 6]">
      <a-col span="24">
        <a-form-item
          name="name"
          :label="$t('studentsDrawer.addForm.fields.name.Label')"
        >
          <a-input showCount allowClear v-model:value="newStudentNameState" />
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
          v-if="errorCode"
          :title="$t('errors.Title')"
          :message="$t(`studentsDrawer.addForm.errors.${errorCode}.Text`)"
          type="error"
          showIcon
        />
      </a-col>
    </a-row>
  </a-form>
</template>
