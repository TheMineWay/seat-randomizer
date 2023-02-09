<script setup lang="ts">
import {
  GoogleOutlined,
  LockOutlined,
  UserOutlined,
} from "@ant-design/icons-vue";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signInWithEmailAndPassword,
} from "firebase/auth";

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

const loginFormState = ref<{ email: string; password: string }>();

const loginWithEmailAndPassword = async () => {
  loginLoading.value = true;
  if (loginFormState.value) {
    try {
      const { email, password } = loginFormState.value;
      const auth = getAuth();
      await signInWithEmailAndPassword(auth, email, password);
    } catch (e) {
      console.log(e);
    }
  }
  loginLoading.value = false;
};
</script>
<template>
  <div class="login-page">
    <a-card :title="$t('loginForm.form.Title')" hoverable class="login-card">
      <a-form :model="loginFormState" @finish="loginWithEmailAndPassword">
        <a-row>
          <a-col span="24">
            <a-form-item>
              <a-input type="email">
                <template #prefix><UserOutlined /></template>
              </a-input>
            </a-form-item>
          </a-col>
          <a-col span="24">
            <a-form-item>
              <a-input type="password">
                <template #prefix>
                  <LockOutlined />
                </template>
              </a-input>
            </a-form-item>
          </a-col>
          <a-col span="24">
            <a-button block type="primary" html-type="submit">{{
              $t("loginForm.form.fields.login.Label")
            }}</a-button>
          </a-col>
        </a-row>
      </a-form>
      <a-divider />
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
