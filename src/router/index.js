import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '@/views/login'
import Register from '@/views/register'
import Layout from '@/views/layout'
import MainLayout from '@/views/main-layout'
import MessageList from '@/views/message-list'
import FriendList from '@/views/friend-list'
import Person from '@/views/person'
import PersonEdit from '@/views/person-edit'
import FriendDetail from '@/views/friend-detail'
import UserSearch from '@/views/user-search'
import UserDetail from '@/views/user-detail'
import InvitationDetail from '@/views/invitation-detail'
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
      { path: '/user/search', component: UserSearch, name: 'user-search' },
      { path: '/user/:id', component: UserDetail, name: 'user-detail' },
      { path: '/friend/:id', component: FriendDetail, name: 'friend-detail' },
      { path: '/chatRoom/:id', component: ChatRoom, name: 'chat-room' },
      { path: '/invitation/:id', component: InvitationDetail, name: 'invitation-detail' },
      { path: '/person/edit', component: PersonEdit, name: 'person-edit' }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
