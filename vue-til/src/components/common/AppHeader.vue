<template>
  <header>
    <div>
      <router-link to="" class="logo"/>
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
export default {
  name: "AppHeader",
  computed: {
    isUserLogin() {
      return this.$store.getters.isLogin
    }
  },
  methods: {
    logoutUser() {
      this.$store.commit('clearUsername');
      this.$router.push('/login');
    }
  }
};
</script>

<style scoped>

</style>