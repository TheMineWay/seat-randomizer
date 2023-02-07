<script lang="ts" setup>
import { getAuth, signOut as firebaseSignOut } from "firebase/auth";

type Props = {
  children: Object;
};

const props = defineProps<Props>();

const signOut = () => {
  firebaseSignOut(getAuth());
};
</script>

<template>
  <a-layout class="layout">
    <a-layout-header>
      <div class="logo" />
      <a-menu theme="dark" mode="horizontal" :style="{ lineHeight: '64px' }">
        <a-menu-item key="1" @click="signOut">{{
          $t("layout.bar.signOut.Text")
        }}</a-menu-item>
      </a-menu>
    </a-layout-header>
    <a-layout-content style="padding: 0 50px">
      <div
        :style="{
          background: '#fff',
          padding: '24px',
          minHeight: '280px',
          margin: '48px 0',
        }"
      >
        <component :is="props.children" />
      </div>
    </a-layout-content>
  </a-layout>
</template>

<script lang="ts">
import { defineComponent, defineProps } from "vue";

export default defineComponent({});
</script>
<style>
.layout {
  height: 100vh;
}
.site-layout-content {
  min-height: 280px;
  padding: 24px;
  background: #fff;
}
#components-layout-demo-top .logo {
  float: left;
  width: 120px;
  height: 31px;
  margin: 16px 24px 16px 0;
  background: rgba(255, 255, 255, 0.3);
}
.ant-row-rtl #components-layout-demo-top .logo {
  float: right;
  margin: 16px 0 16px 24px;
}

[data-theme="dark"] .site-layout-content {
  background: #141414;
}
</style>
