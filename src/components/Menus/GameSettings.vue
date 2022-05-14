<template>
<n-grid cols="24" item-responsive responsive="screen">
  <n-gi content-style="padding: 12px;" span="4">
  <difficulty-slider @sliderRange="print"></difficulty-slider>
  </n-gi>
  <n-gi content-style="padding: 12px;" span="4">
  <select-categories></select-categories>
  </n-gi>
  <n-gi content-style="padding: 12px;" span="4">
  <time-slider></time-slider>
  <other-settings></other-settings> 
  
  </n-gi>
</n-grid>
</template>

<script setup>
import { NGrid, NGi } from "naive-ui"
import DifficultySlider from './components/DifficultySlider.vue'
import SelectCategories from './components/SelectCategories.vue'
import TimeSlider from './components/TimeSlider.vue'
import OtherSettings from './components/OtherSettings.vue'

function print(arg) {
  console.log("print: ", arg)
}
</script>