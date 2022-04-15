<template>
  <main class="section">
    <h3>Welcome to ChatRoom.vue {{ chatId }}</h3>

    <router-link class="text-blue-800" to="/">Back</router-link>

    <p>
      Open this link in another browser window to chat
      <code>https://your-url.com/#/chats/{{ chatId }}</code>
    </p>

    <User>
      <template #user="{ user }">
        <div v-if="user">
          <ul>
            <li v-for="message of messages" :key="message.id">
              <ChatMessage
                :message="message"
                :owner="user.uid === message.sender"
              />
            </li>
          </ul>

          <hr />
          <h5 class="text-blue-600">Record Audio</h5>

          <n-button ghost :color="colors.blue[600]"  v-if="!recorder" @click="record()" class="button is-info">
            Record Voice
          </n-button>
          <button v-else @click="stop()" class="button is-danger">Stop</button>

          <br />

          <audio v-if="newAudio" :src="newAudioURL" controls></audio>

          <hr />

          <n-input v-model:value="newMessageText" />

          <n-button ghost :color="colors.green[600]"
            :disabled="(!newMessageText && !newAudio) || loading"
            type="text"
            @click="addMessage(user.uid)"
          >
            Send
          </n-button>
        </div>

        <Login v-else />
      </template>
    </User>
  </main>
</template>

<script>
import User from "./User.vue"
import ChatMessage from "./ChatMessage.vue"
import Login from "./Login.vue"
import { ref } from "vue"
import { NButton, NInput } from "naive-ui"
import colors from "../config/colors"
import { db } from "../firebase/config"
import {
  collection,
  addDoc,
  onSnapshot,
  orderBy,
  limitToLast,
  query,
  doc,
  setDoc,
} from "@firebase/firestore"
import { getDownloadURL, getStorage, ref as storageRef, uploadBytes } from "firebase/storage"

export default {
  components: {
    User,
    Login,
    ChatMessage,
    NButton,
    NInput
  },
  data() {
    return {
      newMessageText: "",
      loading: false,
      messages: [],
      newAudio: null,
      recorder: null,
      colors
    }
  },
  computed: {
    chatId() {
      return this.$route.params.id
    },
    newAudioURL() {
      return URL.createObjectURL(this.newAudio)
    },
  },
  mounted() {
    const { documents: messages } = this.getMessages()
    this.messages = messages
  },
  methods: {
    getMessages() {
      // Get subcollection of document
      const messagesRef = collection(
        db,
        "chats",
        this.$route.params.id,
        "messages"
      )
      const q = query(messagesRef, orderBy("createdAt"), limitToLast(10))
      const documents = ref(null)
      onSnapshot(q, (snapshot) => {
        let results = []
        snapshot.docs.forEach((doc) => {
          results.push({ ...doc.data(), id: doc.id })
        })
        // update values
        documents.value = results
      })
      return { documents }
    },
    async addMessage(uid) {
      this.loading = true

      let audioURL = null

      const newDoc = await addDoc(collection(db, "chats", this.$route.params.id, "messages"), {
        text: this.newMessageText,
        sender: uid,
        createdAt: Date.now()
      })

      const newDocId = newDoc.id
      console.log("🚀 ~ file: ChatRoom.vue ~ line 136 ~ addMessage ~ newDocId", newDocId)

      if (this.newAudio) {
        const storage = getStorage()
        const audioRef = storageRef(storage, `${this.$route.params.id}/${newDocId}.wav`)
        await uploadBytes(audioRef, this.newAudio).then((snapshot) => {
          console.log("Uploaded audio file")
        })
        audioURL = await getDownloadURL(audioRef)
        await setDoc(doc(db, `chats/${this.$route.params.id}/messages`, newDocId), {audioURL}, {merge: true})
      }

      this.loading = false
      this.newAudio = null

      this.newMessageText = ""
    },
    async record() {
      this.newAudio = null

      const stream = await navigator.mediaDevices.getUserMedia({
        audio: true,
        video: false,
      })

      const options = { mimeType: "audio/webm" }
      const recordedChunks = []
      this.recorder = new MediaRecorder(stream, options)

      this.recorder.addEventListener("dataavailable", (e) => {
        if (e.data.size > 0) {
          recordedChunks.push(e.data)
        }
      })

      this.recorder.addEventListener("stop", () => {
        this.newAudio = new Blob(recordedChunks)
        console.log(this.newAudio)
      })

      this.recorder.start()
    },
    async stop() {
      this.recorder.stop()
      this.recorder = null
    },
  },
}
</script>

<style scoped>
ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  min-width: 500px;
  background: #efefef;
  padding: 10px;
  border-radius: 0;
}

li {
  display: flex;
}
</style>
