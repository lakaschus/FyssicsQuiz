<template>
  <div class="text-left">
    <h4>Difficulty</h4>
    <div class="h-60 h-max-60">
      <n-slider
        v-model:value="sliderData.value"
        :marks="sliderData.marks"
        :min="sliderData.min"
        :max="sliderData.max"
        vertical
        range
      />
    </div>
  </div>
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
