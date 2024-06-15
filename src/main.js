import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'
import AppHome from './pages/AppHome.vue'
import AppPortfolio from './pages/AppPortfolio.vue'
import AppContact from './pages/AppContact.vue'
import AppShowProject from './pages/AppShowProject.vue'
import AppNotFound from './pages/AppNotFound.vue'



const router = createRouter({
    history : createWebHistory(),
    routes : [
        {path: '/', component: AppHome},
        {path: '/portfolio', component: AppPortfolio, name: 'portfolio'},
        {path: '/contact', component: AppContact, name: 'contact'},
        {path: '/portfolio/:slug', component: AppShowProject, name: 'showProject', props: true},
        {path: '/pathMatch(.*)*', component: AppNotFound, name:'not-found'}

    ]
});

createApp(App).use(router).mount('#app')
