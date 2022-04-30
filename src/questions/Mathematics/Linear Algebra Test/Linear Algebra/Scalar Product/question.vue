<template lang="">
  <div class="text-left">
    <n-card :title="title">
      <p>
        <Equation formula="$\begin{pmatrix}1.5\\2\end{pmatrix} \cdot \begin{pmatrix}2.5\\3\end{pmatrix}$ = ??" />
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
