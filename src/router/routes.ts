import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
      { path: 'SigningPage', component: () => import('pages/SigningPage.vue') },
      { path: 'signup', component: () => import('pages/signup.vue') },
<<<<<<< HEAD
      { path: 'Forgot_Password', component: () => import('pages/Forgot_Password.vue') },
      { path: 'login', component: () => import('pages/login.vue') }
=======
      { path: 'login', component: () => import('pages/login.vue') },
      { path: 'Forgot_Password', component: () => import('pages/Forgot_Password.vue') }
>>>>>>> 1ef546ee77ad4f7ee4047e4d7c5070438421eeb7
      
      
  ],
  },

  {
    path: '/login',
    component: () => import('pages/login.vue'),
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue'),
  },
];

export default routes;
