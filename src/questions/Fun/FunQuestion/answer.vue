<template lang="">
  <div class="text-left">
    <n-card>
      <n-divider title-placement="left"> Answer </n-divider>
      <Equation formula="$\epsilon < 0$ !" /> Why? Otherwise it wouldn't be funny!
    </n-card>
  </div>
</template>

<script>
import { NCard, NDivider } from "naive-ui"
import Equation from "vue-mathjax-next"
import meta from "./meta.json"

export default {
  components: {
    NCard,
    Equation,
    NDivider,
  },
  data() {
    return {
      title: meta.title,
    }
  },
}
</script>

<style lang=""></style>
