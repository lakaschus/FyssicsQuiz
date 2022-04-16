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
    <p>And even formulas!</p>
    <Equation>This is an equation!
        When $a \ne 0$, there are two solutions to \(ax^2 + bx + c = 0\) and they are
    $$x = {-b \pm \sqrt{\texttip{b^2-4ac}{descriminant}} \over 2a}.$$
    </Equation>
  </n-card>
  </div>
</template>
<script>
import { NCard } from "naive-ui"
import Equation from "@/components/UIComponents/Equation.vue"

export default {
  components: {
    NCard,
    Equation
  },
}
</script>
<style lang=""></style>
