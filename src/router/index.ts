// https://v3.cn.vuejs.org/guide/migration/async-components.html
// 1、异步组件要用defineAsyncComponent来包装
// 2、component先改名为loader
import { createRouter, createWebHistory } from 'vue-router';
import { defineAsyncComponent } from 'vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: defineAsyncComponent(() => import('/@/views/hello/index.vue'))
        },
        {
            path: '/bye',
            component: defineAsyncComponent(() => import('/@/views/bye/index.vue'))
        }
    ]
});

export default router;
