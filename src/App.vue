<template>
  <div id="app" class="bg-[url('../src/assets/images/backgroundImage.svg')] bg-repeat h-screen">
    <header>
      <div class="text-center">
        <n-h1 class="text-6xl">
          <n-gradient-text
            :gradient="`linear-gradient(90deg, ${colors.green[600]}, ${colors.blue[600]})`"
          >
            Fyssics Quiz
          </n-gradient-text>
        </n-h1>
      </div>
    </header>

<div id="menu">
    <router-view></router-view>
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

<style>
.n-card.n-card--bordered {
  border: 1px solid rgb(166, 166, 166)
}
  </style>
