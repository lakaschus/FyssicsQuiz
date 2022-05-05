<template>
  <n-grid cols="24" item-responsive responsive="screen">
    <n-gi content-style="-webkit-transform: rotate(-90deg);" style="-webkit-transform: rotate(-90deg); width: 250px;" span="1">
     Difficulty Range
    </n-gi>
    <n-gi content-style="padding: 12px;" span="1">
      <div style="height: 250px; justify-content: center">
        <n-slider
          v-model:value="sliderData.value"
          :marks="sliderData.marks"
          :min="sliderData.min"
          :max="sliderData.max"
          vertical
          range
        />
      </div>
    </n-gi>
  </n-grid>
</template>

<script setup>
import { reactive, watch } from "vue"
import { NGrid, NSlider, NLayoutContent, NGridItem, NGi } from "naive-ui"

const sliderData = reactive({
  value: [0, 9],
  min: 0,
  max: 9,
  marks: { ...Array.from({ length: 10 }, (_, i) => i + 1) },
})

const emit = defineEmits(["sliderRange"])
watch(
  sliderData,
  (data) => {
    emit("sliderRange", data.value)
  },
  { deep: true }
)
</script>
