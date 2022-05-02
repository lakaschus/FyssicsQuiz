<template lang="">
  <div class="text-left">
    <n-card :title="title">
      <p>
        Name the most general form of the Schrödinger Equation. Optional: What stops physicists to find a general solution to this equation?
      </p>
    </n-card>
  </div>
</template>

<script>
import { NCard } from "naive-ui"
import Equation from "vue-mathjax-next"
import meta from "./meta.json"

export default {
  components: {
    NCard,
    Equation,
  },
  data() {
    return {
      title: meta.title,
    }
  },
}
</script>

<style lang=""></style>
