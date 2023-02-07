<script setup lang="ts"></script>
<template>
  <div class="login-page">
    <a-card :title="$t('loginForm.form.Title')" hoverable></a-card>
  </div>
</template>

<style lang="scss">
div.login-page {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>

<script lang="ts">
import { defineComponent } from "@vue/runtime-dom";
export default defineComponent({});
</script>
