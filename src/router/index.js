import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '@/views/login'
import Register from '@/views/register'
import Layout from '@/views/layout'
import MainLayout from '@/views/main-layout'
import MessageList from '@/views/message-list'
import FriendList from '@/views/friend-list'
import Person from '@/views/person'
import FriendDetail from '@/views/friend-detail'
import FriendSearch from '@/views/friend-search'
import ChatRoom from '@/views/chat-room'

Vue.use(VueRouter)

const routes = [
  { path: '/login', component: Login, name: 'login' },
  { path: '/register', component: Register, name: 'register' },
  {
    path: '/',
    component: Layout,
    children:
    [
      {
        path: '/',
        component: MainLayout,
        children: [
          { path: '/', component: MessageList, name: 'message-list' },
          { path: '/friend/list', component: FriendList, name: 'friend-list' },
          { path: '/person', component: Person, name: 'person' }
        ]
      },
      { path: '/friend/search', component: FriendSearch, name: 'friend-search' },
      { path: '/friend/:id', component: FriendDetail, name: 'friend-detail' },
      { path: '/chatRoom/:id', component: ChatRoom, name: 'chat-room' }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
