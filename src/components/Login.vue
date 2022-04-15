<template>
  <aside class="section">
    <h3>Sign in Anonymously</h3>
    <n-button ghost :color="colors.green[600]" @click="signInAnonymously">Sign In</n-button>

    <div v-if="newUser">
      <h3>Sign Up for a New Account</h3>
      <a class="text-blue-600" href="#" @click="newUser = false">Returning User?</a>
    </div>

    <div v-else>
      <h3>Sign In with Email</h3>
      <div class="mb-2">
      <a class="text-blue-600" href="#" @click="newUser = true">New user?</a>
      </div>
    </div>

    <label for="email">Email</label>
    <br />
    <n-input v-model:value="email" placeholder="email" type="email" autosize style="min-width: 20%" />
    <br>
    <label for="password">Password</label>
    <br />
    <n-input v-model:value="password" type="password" autosize style="min-width: 20%"/>

    <br />
    <br />

    <n-button :color="colors.green[600]"
      @click="signInOrCreateUser()"
    >
      {{ newUser ? "Sign Up" : "Login" }}
    </n-button>

    <p class="has-text-danger" v-if="errorMessage">{{ errorMessage }}</p>
  </aside>
</template>

<script>
import { auth } from "../firebase/config"
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signInAnonymously,
} from "firebase/auth"
import colors from "../config/colors"
import { NButton, NA, NInput } from "naive-ui"

export default {
  data() {
    return {
      auth,
      colors,
      newUser: false,
      email: "",
      test: "",
      password: "",
      errorMessage: "",
      loading: false,
    }
  },
  components: {
    NButton,
    NA,
    NInput
  },
  methods: {
    async signInOrCreateUser() {
      this.loading = true
      this.errorMessage = ""
      console.log("email, password", this.email)
      try {
        if (this.newUser) {
          await createUserWithEmailAndPassword(auth, this.email, this.password)
        } else {
          await signInWithEmailAndPassword(auth, this.email, this.password)
        }
      } catch (error) {
        this.errorMessage = error.message
      }

      this.loading = false
    },
    signInAnonymously() {
      signInAnonymously(auth)
        .then(() => {})
        .catch((error) => {
          console.log(
            "🚀 ~ file: Login.vue ~ line 76 ~ signInAnonymously ~ error",
            error
          )
        })
    },
  },
}
</script>
<style>
</style>