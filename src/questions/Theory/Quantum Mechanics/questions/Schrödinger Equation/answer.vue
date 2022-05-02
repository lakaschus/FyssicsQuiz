<template lang="">
  <div class="text-left">
    <n-card>
      <n-divider title-placement="left"> Answer </n-divider>
      <p>The Schrödinger Equation in its most general form is given by</p>
      <p> <Equation formula="$i \hbar \dfrac{\textrm{d}}{\textrm{d}t} | \psi(t) \rangle = \hat{H} | \psi(t) \rangle \, .$" /> </p>
      <p><Equation formula="$\psi(t)$"/> is the wave function (state vector), <Equation formula="$\hat{H}$"/> is the Hamiltonian operator and <Equation formula="$t$"/> is time. </p>
      <p>It can't be solved generally as the Hamiltonian operator, which, similar to the Lagrangian, cannot be derived, but needs to be inserted appropriately to the given physical situation.
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
