<script setup lang="ts">
import { GithubOutlined, GoogleOutlined } from "@ant-design/icons-vue";
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
    console.error(e);
  }
  loginLoading.value = false;
};

const openGithub = () => {
  window.open("https://github.com/TheMineWay/seat-randomizer", "_blank");
};
</script>
<template>
  <div class="login-page">
    <a-row :gutter="[12, 12]" justify="center">
      <a-col span="24">
        <a-card
          :title="$t('loginForm.form.Title')"
          hoverable
          class="login-card"
        >
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
      </a-col>
      <a-col span="24">
        <a-button type="ghost" block @click="openGithub">
          <template #icon>
            <GithubOutlined />
          </template>
          {{ $t("layout.bar.github.Text") }}
        </a-button>
      </a-col>
    </a-row>
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
  width: 100%;
}
</style>

<script lang="ts">
import { defineComponent, ref } from "@vue/runtime-dom";
export default defineComponent({});
</script>
