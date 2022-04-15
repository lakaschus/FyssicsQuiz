import { createRouter, createWebHistory } from 'vue-router'
// import HomeView from '../views/HomeView.vue'

import Home from '../components/Home.vue'
import ChatRoom from '../components/ChatRoom.vue'
import Playground from '../playground/index.vue'

const router = createRouter({
    history: createWebHistory(
        import.meta.env.BASE_URL),
    routes: [
        { path: '/', component: Home },
        { path: '/chats/:id', component: ChatRoom, name: 'chat' },
        { path: '/playground/', component: Playground}
    ]
})

export default router