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
  history: createWebHistory('/'), // 샵 안붙음
  // history: createWebHashHistory(), // 샵 붙음
  routes, // routes : routes,
});

export default router;
