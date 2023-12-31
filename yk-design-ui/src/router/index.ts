import { createRouter, createWebHistory } from 'vue-router'
import Test from '@/views/Test/index.vue'
import YkTest from '@/components/test/src/TestVue.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', redirect: '/test' },
    { path: '/test', component: Test, name: 'Test' },
    {
      path: '/yk-design-ui',
      component: YkTest,
      name: 'Yk-Test',
    },
  ],
})

export default router
