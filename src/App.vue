<template>
  <div id="app">
    <header>
      <div class="text-center">
        <n-h1>
          <n-gradient-text
            :gradient="`linear-gradient(90deg, ${colors.green[600]}, ${colors.blue[600]})`"
          >
            Fyssics Quiz
          </n-gradient-text>
        </n-h1>
      </div>
    </header>

<div class="text-center">
    <router-view class="bg-[url('../src/assets/images/backgroundImage.svg')] bg-repeat h-screen"></router-view>
    </div>
  </div>
</template>

<script>
import { NGradientText, NH1 } from "naive-ui"
import colors from "./config/colors"

export default {
  name: "App",
  components: {
    NGradientText,
    NH1,
  },
  data() {
    return {
      colors: colors,
    }
  },
}
</script>

<style></style>
