<script setup lang="ts">
import { ref } from "vue";
import { getAuth, onAuthStateChanged, User } from "firebase/auth";

const auth = getAuth();

let loginState = ref<{ user?: User | null }>({ user: null });

onAuthStateChanged(auth, (user) => {
  if (user) loginState.value = { user };
  else loginState.value = {};
});
</script>

<template>
  <div class="home">
    <div v-if="loginState.user">
      <LayoutComponent :children="ClassroomView" />
    </div>
    <LoginComponent v-else-if="loginState.user !== null" />
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
import LayoutComponent from "../components/layout/LayoutComponent.vue";
import ClassroomView from "../views/app/ClassroomView.vue";

export default defineComponent({
  name: "HomeView",
  components: { LoginComponent, LayoutComponent },
});
</script>
