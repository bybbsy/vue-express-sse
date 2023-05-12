import { createRouter, createWebHistory } from 'vue-router'
import loginPage from '@/pages/loginPage.vue';
import chatPage from '@/pages/chatPage.vue';


const anyRedirect = () => {
    const username = localStorage.getItem('sse-username');
    if(username) {
        return { name: 'chat' };
    } else {
        return { name: 'login' };
    }
}

export const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            name: 'login',
            path: '/login',
            component: loginPage
        },
        {
            name: 'chat',
            path: '/chat',
            component: chatPage,
        },
        {
            name: 'root',
            path: '/',
            redirect: { name: 'login' }
        },
        {
            name: 'any',
            path: '/:pathMatch(.*)*',
            redirect: anyRedirect
        }
    ]
})