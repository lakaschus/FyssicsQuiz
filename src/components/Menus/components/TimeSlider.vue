<template>
  <div>
    <h4>Time per question</h4>
    <n-space vertical>
      <n-slider v-model:value="duration" :step="1" :max="300" />
      <n-input-number v-model:value="duration" size="small" />
    </n-space>
  </div>
</template>

<script setup>
import { NSpace, NSlider, NInputNumber } from "naive-ui"
import { ref, watch } from "vue"

let duration = ref(60)

const emit = defineEmits(["duration"])
watch(
  duration,
  (data) => {
    emit("duration", data)
  }
)
</script>
