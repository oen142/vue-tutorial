<template>
  <form @submit.prevent="submitForm">
    <div>
      <label for="username">id:</label>
      <input id="username" type="text" v-model="username"/>
    </div>

    <div>
      <label for="password">pw:</label>
      <input id="password" type="text" v-model="password"/>
    </div>
    <button :disabled="!isUsernameValid || !password" type="submit">로그인</button>
    <p>{{ logMessage }}</p>
  </form>
</template>

<script>
import {validateEmail} from '@/utils/validation'

export default {
  name: "LoginForm",
  data() {
    return {
      username: '',
      password: '',
      logMessage: '',
    }
  },
  methods: {
    async submitForm() {
      try {
        const userData = {
          username: this.username,
          password: this.password
        }

        await this.$store.dispatch('LOGIN', userData)
        await this.$router.push('/main');
      } catch (error) {
        this.logMessage = error.response.data
        alert(error.response.data)
      } finally {
        this.initForm();
      }
    },
    initForm() {
      this.username = '';
      this.password = '';
    }
  },
  computed: {
    isUsernameValid() {
      return validateEmail(this.username);
    }
  },
}
</script>

<style scoped>

</style>