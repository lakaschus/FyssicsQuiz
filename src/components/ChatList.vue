<template>
  <div>
    <ul class="list-none -ml-10">
      <li v-for="chat of chats" :key="chat.id">
        <router-link
          class="text-blue-600"
          :to="{ name: 'chat', params: { id: chat.id } }"
          >{{ chat.id }}</router-link
        >
      </li>
    </ul>

    <n-button ghost :color="colors.green[600]" @click="createChatRoom()">
      Create New Chat Room
    </n-button>
  </div>
</template>

<script>
import getCollection from "../composables/getCollection"
import getUser from "../composables/getUser"
import { NButton } from "naive-ui"
import colors from "../config/colors"
import createDoc from "../composables/createDoc"

export default {
  data() {
    return {
      chats: [],
      colors,
    }
  },
  components: {
    NButton,
  },
  mounted() {
    this.chats = this.getChatRooms()
    setTimeout(
      () =>
        console.log(
          "🚀 ~ file: ChatList.vue ~ line 35 ~ mounted ~ this.chats",
          this.chats
        ),
      1000
    )
  },
  watch: {
    chats(newChats, oldChats) {
      console.log(
        "🚀 ~ file: ChatList.vue ~ line 39 ~ chats ~ oldChats",
        oldChats
      )
      console.log(
        "🚀 ~ file: ChatList.vue ~ line 39 ~ chats ~ newChats",
        newChats
      )
    },
  },
  methods: {
    async createChatRoom() {
      createDoc("chats", {
        createdAt: Date.now(),
        owner: this.uid,
        members: [this.uid],
      })
    },
    getChatRooms() {
      const { user } = getUser()
      const { documents: chats } = getCollection("chats", [
        "owner",
        "==",
        user.value.uid,
      ])
      return chats
    },
  },
  props: ["uid"],
}
</script>
