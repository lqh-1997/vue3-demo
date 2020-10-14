import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: () => import('/@/views/hello/index.vue')
        },
        {
            path: '/bye',
            component: () => import('/@/views/bye/index.vue')
        }
    ]
});

export default router;
