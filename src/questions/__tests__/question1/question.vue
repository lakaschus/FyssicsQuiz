<template lang="">
<div class="text-left">
  <n-card title="Question">
    <p>This is a text explaining the exercise!</p>
    <p>You can use list items:</p>
    <ul>
        <li>a</li>
        <li>b</li>
        <li>c</li>
    </ul>
    <p>And even formulas using LaTeX!</p>
    <Equation formula="$$x = {-b \pm \sqrt{b^2-4ac} \over 2a}.$$" />
  </n-card>
  <p>You have basically all possibilities that html and Vue.js offer.</p>
  </div>
</template>

<script>
import { NCard } from "naive-ui"
import Equation from 'vue-mathjax-next';

export default {
  components: {
    NCard,
    Equation
  }
}
</script>

<style lang=""></style>
