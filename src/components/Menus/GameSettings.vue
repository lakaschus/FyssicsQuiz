<template>
  <difficulty-slider @sliderRange="print"></difficulty-slider>
</template>

<script setup>
import DifficultySlider from './components/DifficultySlider.vue'

function print(arg) {
  console.log("print: ", arg)
}
</script>