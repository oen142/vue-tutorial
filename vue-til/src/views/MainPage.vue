<template>
  <div class="main container-list">
    <div>
      <h1 class="page-header">Today I Learned</h1>
      <LoadingSpinner v-if="isLoading"></LoadingSpinner>
      <ul v-else>
        <PostListItem v-for="postItem in postItems"
                      :key="postItem._id"
                      :postItem="postItem"
                      @refresh="fetchData"/>
      </ul>
    </div>
    <router-link to="/add" class="create-button"> +</router-link>
  </div>
</template>

<script>
import {fetchPosts} from '@/api/posts'
import PostListItem from "@/components/posts/PostListItem.vue";
import LoadingSpinner from "@/components/common/LoadingSpinner.vue";

export default {
  name: "MainPage",
  components: {LoadingSpinner, PostListItem},
  data() {
    return {
      postItems: [],
      isLoading: false,
    }
  },
  methods: {
    async fetchData() {
      this.isLoading = true;
      const {data} = await fetchPosts();
      this.isLoading = false;
      this.postItems = data.posts
    }
  },
  created() {
    this.fetchData()
  }
}
</script>

<style scoped>

</style>