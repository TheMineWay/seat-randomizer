<script setup lang="ts">
import { reactive } from 'vue';

const loginState = reactive({});

const isLoggedIn = true;
</script>

<template>
  <div class="home">
    <LoginComponent v-if="isLoggedIn"/>
    <a-button type="primary" v-else>a</a-button>
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
import { defineComponent } from 'vue';
import LoginComponent from '../components/auth/login/LoginComponent.vue';

export default defineComponent({
    name: "HomeView",
    components: { LoginComponent }
});
</script>
