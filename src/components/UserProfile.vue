<template>
  <div>
    <div class="my-2">Logged in as {{ user.uid }}</div>
    <n-button ghost :color="colors.blue[600]" @click="auth.signOut()">Sign Out</n-button>
  </div>
</template>

<script>
import { auth } from "../firebase/config"
import { NButton } from "naive-ui"
import colors from "../config/colors"

export default {
  data() {
    return { 
          auth,
          colors
    }
  },
  components: {
    NButton
  },
  props: ['user']
}
</script>
