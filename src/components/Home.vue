<template>
  <div class="flex justify-center">
    <div class="w-6/12 text-center">
      <div class="mb-2">
        <n-card :bordered="true">
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
      </div>
      <div>
        <n-card :bordered="true">
          <n-h1>About</n-h1>
        </n-card>
      </div>
    </div>
  </div>
</template>

<script setup>
import Login from "./Login.vue"
import User from "./User.vue"
import UserProfile from "./UserProfile.vue"
import ChatList from "./ChatList.vue"
import { NCard, NH1, NH3 } from "naive-ui"
</script>

<style scoped>
.n-card.n-card--bordered {
  border-width: 2px;
  border-color: lightgray;
}
</style>
