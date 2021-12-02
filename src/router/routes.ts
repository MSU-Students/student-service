import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
      { path: 'SigningPage', component: () => import('pages/SigningPage.vue') },
      { path: 'Announcements', component: () => import('pages/Announcements.vue') },
      { path: 'Forgot_Password', component: () => import('pages/Forgot_Password.vue') },
      { path: 'HomePage', component: () => import('pages/HomePage.vue') },
      { path: 'LandingPage', component: () => import('pages/LandingPage.vue') }
      
      
  ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue'),
  },
];

export default routes;
