import { createApp } from 'vue';
import router from './router';
import { store } from './store';
import App from './App.vue';
import { changeColorDirective } from './directive/changeColor';

createApp(App).directive('color', changeColorDirective).use(router).use(store).mount('#app');
