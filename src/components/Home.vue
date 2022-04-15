<template>
  <n-card :bordered="false">
<n-h1>Home</n-h1>
    <User>
      <template v-slot:user="{ user }">
      <div v-if="user">
          <n-h3>User Profile</n-h3>
        <UserProfile :user="user" />
          <n-h3>My Chat Rooms</n-h3>
        <ChatList :uid="user.uid" />
      </div>
      <Login v-else />
      </template>
    </User>
  </n-card>
</template>

<script>
import Login from './Login.vue'
import User from './User.vue'
import UserProfile from './UserProfile.vue'
import ChatList from './ChatList.vue'
import { NCard, NH1, NH3 } from 'naive-ui'

export default {
    components: {
        Login, 
        User,
        UserProfile,
        ChatList,
        NCard,
        NH1,
        NH3
    }
}
</script>