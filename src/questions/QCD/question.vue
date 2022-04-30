<template lang="">
  <div class="text-left">
    <n-card :title="title">
      <p>
        Write down the Lagrangian of Quantum-Chromodynamics.
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
