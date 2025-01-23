<template>
  <div>
    <!-- http://localhost:3000/posts/abc?searchText=Vue3바이블#hashvalue -->
    <!-- <p>params: {{ $route.params }}</p>
    { "id": "abc" } 
    <p>query: {{ $route.query }}</p>
    { "searchText": "Vue3바이블" } 
    <p>hash: {{ $route.hash }}</p>
    #hashvalue  -->
    <h2>{{ form.title }}</h2>
    <p>{{ form.content }}</p>
    <p class="text-muted">{{ form.createdAt }}</p>
    <hr class="my-4" />
    <div class="row g-2">
      <div class="col-auto">
        <button class="btn btn-outline-dark">이전글</button>
      </div>
      <div class="col-auto">
        <button class="btn btn-outline-dark">다음글</button>
      </div>
      <div class="col-auto me-auto"></div>
      <div class="col-auto">
        <button class="btn btn-outline-dark" @click="goListPage">목록</button>
      </div>
      <div class="col-auto">
        <button class="btn btn-outline-primary" @click="goEditPage">
          수정
        </button>
      </div>
      <div class="col-auto">
        <button class="btn btn-outline-danger">삭제</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';
import { getPostById } from '@/api/posts';
import { ref } from 'vue';

const props = defineProps({
  // id: String,
  id: Number,
});

//const route = useRoute();
const router = useRouter();
//const id = route.params.id;

/* 
string이나 number는 ref, 배열이나 객체는 reactive로 선언

ref는 한꺼번에 객체 할당가능 (value 프로퍼티를 통해 값을 관리하기 때문이다)
reactive로 선언시 form.title = data.title; form.content = data.content; 와 같이 속성별로 업데이트 해야 함

ref 
장점 - 객체 할당 가능, 일관성 유지 가능
단점 - form.value.title, form.value.content
reactive 
장점 - form.title, form.content
단점 - 객체 할당 불가능
*/
const form = ref({});
const fetchPost = () => {
  const data = getPostById(props.id);
  // ref로 선언된 form에 새로운 객체를 할당하면 Vue는 이를 감지하고 상태를 업데이트 함
  form.value = { ...data };
};
fetchPost();
const goListPage = () => router.push({ name: 'PostList' });
const goEditPage = () =>
  router.push({ name: 'PostEdit', params: { id: props.id } });
</script>

<style lang="scss" scoped></style>
