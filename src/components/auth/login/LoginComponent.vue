<script setup lang="ts">
import { GoogleOutlined } from "@ant-design/icons-vue";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const providers = {
  google: new GoogleAuthProvider(),
};

const loginWithGoogle = async () => {
  const auth = getAuth();
  const credentials = await signInWithPopup(auth, providers.google);
  return credentials;
};
</script>
<template>
  <div class="login-page">
    <a-card :title="$t('loginForm.form.Title')" hoverable class="login-card">
      <a-button type="primary" block @click="loginWithGoogle">
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
import { defineComponent } from "@vue/runtime-dom";
export default defineComponent({});
</script>
