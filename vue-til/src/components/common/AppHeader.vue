<template>
  <header>
    <div>
      <router-link :to="logoLink" class="logo">
        TIL
      </router-link>
    </div>
    <div class="navigations">
      <template v-if="isUserLogin">
        <span class="username"> {{ $store.state.username }}</span>
        |
        <a href="javascript:;" @click="logoutUser">LogOut</a>
      </template>
      <template v-else>
        <router-link to="/login">Login</router-link>
        |
        <router-link to="/signup">Signup</router-link>
      </template>
    </div>

  </header>
</template>

<script>
import {deleteCookie} from "@/utils/cookies";

export default {
  name: "AppHeader",
  computed: {
    isUserLogin() {
      return this.$store.getters.isLogin
    },
    logoLink() {
      return this.$store.getters.isLogin ? '/main' : '/'
    }
  },
  methods: {
    logoutUser() {
      this.$store.commit('clearUsername');
      this.$store.commit('clearToken');
      deleteCookie('til_auth');
      deleteCookie('til_user');
      this.$router.push('/login');
    }
  }
};
</script>

<style scoped>

</style>