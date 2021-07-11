<template>
  <div class="contents">
    <h1 class="page-header">수정 페이지</h1>
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
        <button class="btn" type="submit">수정 하기</button>
      </form>
      <ToastPopup/>
    </div>
  </div>
</template>

<script>
import {fetchPost, updatePost} from "@/api/posts";
import ToastPopup from "@/components/common/ToastPopup";

export default {
  name: "PostEditForm",
  components: {ToastPopup},
  data() {
    return {
      id: '',
      title: '',
      contents: '',
      logMessage: '',
    }
  },
  methods: {
    async submitForm() {
      try {
        const postData = {
          title: this.title,
          contents: this.contents,
        }
        const response = await updatePost(this.id, postData)
        await this.$router.push('/main')
      } catch (error) {
        console.log(error);
        this.logMessage = error;
      }
    },
  },
  computed: {
    isContentsValid() {
      return this.contents.length <= 200;
    }
  },
  async created() {
    this.id = this.$route.params.id;
    const {data} = await fetchPost(this.id);
    this.title = data.title;
    this.contents = data.contents;
  }
}
</script>

<style scoped>

</style>