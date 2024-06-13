import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'
import AppHome from './pages/AppHome.vue'
import AppPortfolio from './pages/AppPortfolio.vue'
import AppContact from './pages/AppContact.vue'



const router = createRouter({
    history : createWebHistory(),
    routes : [
        {path: '/', component: AppHome},
        {path: '/portfolio', component: AppPortfolio, name: 'portfolio'},
        {path: '/contact', component: AppContact, name: 'contact'}
    ]
});

createApp(App).use(router).mount('#app')
