<template>
  <div class="contents">
    <h1 class="page-header">생성 페이지</h1>
    <div class="form-wrapper">
      <form class="form" @submit.prevent="submitForm">
        <div>
          <label for="title">Title: </label>
          <input id="title" type="text" v-model="title"/>
        </div>
        <div>
          <label for="contents">Contents: </label>
          <textarea id="contents" rows="5" v-model="contents"/>
          <p v-if="!isContentsValid" class="validation-text waring">Contents length must be less than 200</p>
        </div>
        <button class="btn" type="submit">등록하기</button>
      </form>
      <p>{{ logMessage }}</p>
    </div>
  </div>
</template>

<script>
import {createPost} from '@/api/index'

export default {
  name: "PostAddForm",
  data() {
    return {
      title: '',
      contents: '',
      logMessage: '',
    }
  },
  methods: {
    async submitForm() {
      try {
        const response = await createPost({
          title: this.title,
          contents: this.contents
        })
      } catch (error) {
        this.logMessage = '에러'
        console.log(error)
      } finally {
      }
    },
  },
  computed: {
    isContentsValid() {
      return this.contents.length <= 200;
    }
  }
}
</script>

<style scoped>
.form-wrapper .form {
  width: 100%;
}
</style>