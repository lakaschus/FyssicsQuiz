<template lang="">
  <div class="text-left">
    <n-card>
      <n-divider title-placement="left"> Answer </n-divider>
      <p>The Lagrangian of QCD is given by</p>
      <Equation formula="$$\mathcal{L}_{QCD} =  \sum_{i=1}^3 \sum_{f=1}^{N_{f}}  \, \overline{\Psi}_{fi} \left(i \gamma^{\mu} D_{\mu} - m_{f} \right) \Psi_{fi}  - \dfrac{1}{4} F_{\mu \nu}^{a}  F^{a \mu \nu}$$" />
      <p>where <Equation formula="$D_{\mu}$" /> is the covariant derivative <Equation formula="$D_{\mu} = \partial_{\mu} - i g \mathcal{A}_{\mu}^a T^a$, $\mathcal{A}_{\mu}^a$" /> are the gluon fields, and <Equation formula="$T^{a}$" /> the generators of the SU(3) group, namely half the Gell-Mann matrices.</p>
      <n-divider title-placement="left"> Sources </n-divider>
      <a href="https://en.wikipedia.org/wiki/Newton%27s_laws_of_motion"
        >Wikipedia</a
      >
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
