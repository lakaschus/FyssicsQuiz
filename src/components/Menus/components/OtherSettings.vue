<template>
<div class="inline-flex mt-2 mb-2">
  <n-space>
    <n-switch v-model:value="jokerActive" size="large">
      <template #icon> 🔮 </template>
    </n-switch> <span class="ml-2">Joker</span> 
    <n-tooltip trigger="hover">
    <template #trigger>
      <n-icon size="30">
    <InformationCircleOutline />
  </n-icon>
    </template>
    Shows random parts of the answer. Only one time per game.
  </n-tooltip>
  </n-space>
</div>
</template>

<script setup>
import { InformationCircleOutline } from '@vicons/ionicons5'
import { NSwitch, NSpace, NTooltip, NIcon } from "naive-ui"
import { ref, watch } from "vue"

let jokerActive = ref(false)

const emit = defineEmits(["jokerActive"])
watch(
  jokerActive,
  (data) => {
    emit("jokerActive", data)
  }
)
</script>
