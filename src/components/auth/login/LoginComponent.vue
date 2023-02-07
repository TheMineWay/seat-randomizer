<script setup lang="ts">
import { GoogleOutlined } from "@ant-design/icons-vue";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const providers = {
  google: new GoogleAuthProvider(),
};

const loginLoading = ref(false);

const loginWithGoogle = async () => {
  loginLoading.value = true;
  try {
    const auth = getAuth();
    await signInWithPopup(auth, providers.google);
  } catch (e) {
    console.log(e);
  }
  loginLoading.value = false;
};
</script>
<template>
  <div class="login-page">
    <a-card :title="$t('loginForm.form.Title')" hoverable class="login-card">
      <a-button
        type="primary"
        block
        @click="loginWithGoogle"
        :loading="loginLoading"
      >
        <template #icon>
          <GoogleOutlined />
        </template>
        {{ $t("loginForm.form.fields.loginWithGoogle.Label") }}</a-button
      >
    </a-card>
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
.login-card {
  width: 40em;
  max-width: 95%;
}
</style>

<script lang="ts">
import { defineComponent, ref } from "@vue/runtime-dom";
export default defineComponent({});
</script>
