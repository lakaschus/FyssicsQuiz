<template>
  <div>
    <h4>Time per question</h4>
    <n-space vertical>
      <n-slider v-model:value="value" :step="1" :max="300" />
      <n-input-number v-model:value="value" size="small" />
    </n-space>
  </div>
</template>

<script setup>
import { NSpace, NSlider, NInputNumber } from "naive-ui"
import { ref } from "vue"

let value = ref(60)
</script>
