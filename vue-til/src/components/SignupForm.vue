<template>
  <form @submit.prevent="submitForm">
    <div>
      <label for="username">id</label>
      <input id="username" type="text" v-model="username"/>
    </div>

    <div>
      <label for="password">password</label>
      <input id="password" type="text" v-model="password"/>
    </div>

    <div>
      <label for="nickname">nickname</label>
      <input id="nickname" type="text" v-model="nickname"/>
    </div>

    <button type="submit">회원 가입</button>
    <p>{{ logMessage }}</p>
  </form>
</template>

<script>
import {registerUser} from '@/api/auth'
import {validateEmail} from "@/utils/validation";

export default {

  name: "SignupForm",
  data() {
    return {
      username: "",
      password: "",
      nickname: "",
      logMessage: "",
    }
  },
  methods: {
    async submitForm() {
      const userData = {
        username: this.username,
        password: this.password,
        nickname: this.nickname
      }
      const {data} = await registerUser(userData);
      console.log(data.username)
      this.logMessage = `${data.username} 님의 가입을 했습니다.`
      this.initForm();
    },
    initForm() {
      this.username = '';
      this.password = '';
      this.nickname = '';
    }
  },
  computed: {
    isUsernameValid() {
      return validateEmail(this.username)
    }
  }
}
</script>

<style scoped>

</style>