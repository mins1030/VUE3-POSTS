<template>
  <div>
    <h2>게시글 목록</h2>
    <hr class="my-4" />
    <div class="row g-3">
      <!-- col-3  col-12 -->
      <div v-for="post in posts" :key="post.id" class="col-4">
        <PostItem
          :title="post.title"
          :content="post.content"
          :created-at="post.createdAt"
          @click="goPage(post.id)"
        ></PostItem>
      </div>
    </div>
    <hr class="my-4" />
    <AppCard>
      <PostDetailView :id="2"></PostDetailView>
    </AppCard>
  </div>
</template>

<script setup>
import PostItem from '@/components/posts/PostItem.vue';
import PostDetailView from '@/views/posts/PostDetailView.vue';
import AppCard from '@/components/AppCard.vue';
import { getPosts } from '@/api/posts';
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const posts = ref([]);

const fetchPosts = () => {
  posts.value = getPosts();
};
fetchPosts();
const goPage = id => {
  /* 리터럴 문자열 경로 (작은 따옴표)
  router.push('/posts/' + id);    */

  /* 백틱
  router.push(`/posts/${id}`);  */

  /* 경로가 있는 객체
  router.push({ path: '/posts/${id}' });  */

  // 이름을 가지는 라우트
  // http://localhost:3000/posts/2?searchText=hello#world!
  router.push({
    name: 'PostDetail',
    params: {
      id,
    },
    /* query: {
      searchText: 'hello',
    },
    hash: '#world!', */
  });
};
</script>

<style lang="scss" scoped></style>
