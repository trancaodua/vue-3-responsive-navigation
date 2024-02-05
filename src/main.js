import { createApp } from 'vue'
import App from './App.vue';
import Home from './pages/Home.vue';
import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', redirect: '/home' },
        {
            path: '/home',
            name: 'home',
            component: Home
        }
    ]
})

const app = createApp(App);

app.use(router);

app.mount('#app');
