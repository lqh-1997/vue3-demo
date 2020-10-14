import { createApp } from 'vue';
import router from './router';
import { store } from './store';
import App from './App.vue';
import { changeColorDirective } from './directive/changeColor';

// 全局变量的使用方式 provide 和 inject
createApp(App)
    .provide('global', 'i am global')
    .directive('color', changeColorDirective)
    .use(router)
    .use(store)
    .mount('#app');
