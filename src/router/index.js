import {
  createRouter,
  createWebHashHistory,
  createWebHistory,
} from 'vue-router';
import HomeView from '@/views/HomeView.vue';
import AboutView from '@/views/AboutView.vue';
import PostCreateView from '@/views/posts/PostCreateView.vue';
import PostDetailView from '@/views/posts/PostDetailView.vue';
import PostEditView from '@/views/posts/PostEditView.vue';
import PostListView from '@/views/posts/PostListView.vue';
import NotFoundView from '@/views/NotFoundView.vue';
import NestedView from '@/views/nested/NestedView.vue';
import NestedOneView from '@/views/nested/NestedOneView.vue';
import NestedTwoView from '@/views/nested/NestedTwoView.vue';
import NestedHomeView from '@/views/nested/NestedHomeView.vue';
const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView,
  },
  {
    path: '/about',
    name: 'About',
    component: AboutView,
  },
  {
    path: '/posts',
    name: 'PostList',
    component: PostListView,
  },
  {
    /*  
     콜론 포함 = 동적 라우팅
     콜론은 파라미터로 라우트 객체 $route.params로 받을 수 있다
     여러개의 url을 하나의 페이지에 매핑하고 싶을 때 사용
     /user/honggildong
     /user/kimminseo 
     */
    path: '/posts/:id',
    name: 'PostDetail',
    component: PostDetailView,
    // 라우트 컴포넌트에 속성 전달 (Boolean 모드, Named Views, 객체 모드, 함수 모드)
    // props: true,
    /* props: route => {   
      return {
        id: parseInt(route.params.id),
        other: route.query,
      };
    }, */
    props: route => ({
      id: parseInt(route.params.id),
    }),
  },
  {
    path: '/posts/:id/edit',
    name: 'PostEdit',
    component: PostEditView,
  },
  {
    path: '/posts/create',
    name: 'PostCreate',
    component: PostCreateView,
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: NotFoundView,
  },
  {
    path: '/nested',
    name: 'Nested',
    component: NestedView,
    children: [
      {
        path: '',
        name: 'NestedHome',
        component: NestedHomeView,
      },
      {
        path: 'one',
        name: 'NestedOne',
        component: NestedOneView,
      },
      {
        path: 'two',
        name: 'NestedTwo',
        component: NestedTwoView,
      },
    ],
  },
];

const router = createRouter({
  /* 
  History 모드 - 샵 안붙음 
  -운영 배포시 서버 설정 추가해줘야 404 Not Found 안뜸
  */
  history: createWebHistory('/'),

  /* 
  Hash모드 - 샵 붙음 
  개발자 도구에서 Request URL : 샵 뒤의 도메인은 제거하고 요청함
  루트로만 url 요청하기 때문에 서버 별도 설정 필요하지 않음
  SED (검색 인증 최적화)에 나쁜 영향을 미친다 (서버 수준에서 특별한 처리가 필요하지 않기 때문에)
   */
  // history: createWebHashHistory(),
  routes, // routes : routes,
});

export default router;
