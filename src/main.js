import { createApp } from 'vue'
import App from './App.vue'
import router from './router.js'
import 'bootstrap/dist/css/bootstrap.css';
import { createPinia } from 'pinia';

createApp(App).use(router).use(createPinia()).mount('#app')
