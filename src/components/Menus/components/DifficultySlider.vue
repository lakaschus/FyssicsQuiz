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
  value: [1, 10],
  min: 1,
  max: 10,
  marks: { 1: 1, 2: 2, 3: 3, 4: 4, 5: 5, 6: 6, 7: 7, 8: 8, 9: 9, 10: 10 },
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
