<script setup lang="ts">
import { reactive } from "vue";

const loginState = reactive({});

const isLoggedIn = false;
</script>

<template>
  <div class="home">
    <div v-if="isLoggedIn">{{ $t("test") }}</div>
    <LoginComponent v-else />
  </div>
</template>

<style lang="scss">
div.home {
  height: 100vh;
  width: 100vw;
  background-color: rgb(207, 207, 207);
}
</style>

<script lang="ts">
import { defineComponent } from "vue";
import LoginComponent from "../components/auth/login/LoginComponent.vue";

export default defineComponent({
  name: "HomeView",
  components: { LoginComponent },
});
</script>
