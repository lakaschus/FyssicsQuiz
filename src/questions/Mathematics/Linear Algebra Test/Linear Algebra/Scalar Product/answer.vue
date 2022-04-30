<template lang="">
  <div class="text-left">
    <n-card>
      <n-divider title-placement="left"> Answer </n-divider>
      <p>
        <Equation
          formula="$1.5 \cdot 2.5 + 2 \cdot 3 = 3.75 + 6 = 9.75$"
        />
      </p>
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
