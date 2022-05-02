<template lang="">
  <div class="text-left">
    <n-card>
      <n-divider title-placement="left"> Answer </n-divider>
      <img src="./standardModelParticles.jpg" style="max-width: 50%">
      <n-divider title-placement="left"> Source </n-divider>
      <a href="https://en.wikipedia.org/wiki/Particle_physics#/media/File:Standard_Model_of_Elementary_Particles_Anti.svg">https://en.wikipedia.org/wiki/Particle_physics#/media/File:Standard_Model_of_Elementary_Particles_Anti.svg</a>
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
