<template>
  <li>
    <div class="post-title">
      {{ postItem.title }}
    </div>
    <div class="post-contents">
      {{ postItem.contents }}
    </div>
    <div class="post-time">
      {{ postItem.createdAt | formatDate }}
      <button @click="routeEditPage">수정하기</button>
      <button @click="deleteItem">삭제하기</button>
    </div>
  </li>
</template>

<script>
import {deletePost} from '@/api/posts'

export default {
  name: "PostListItem",
  props: {
    postItem: {
      type: Object,
      required: true,
    }
  },
  methods: {
    async deleteItem() {
      if (confirm('You want to delete it')) {
        await deletePost(this.postItem._id);
        this.$emit('refresh');
      }
    },
    routeEditPage() {
      this.$router.push(`/post/${this.postItem._id}`);
    }
  },
}
</script>

<style scoped>

</style>