<template>
  <n-space>
    <n-button :loading="loading" @click="handleClick" ghost color="#ff69b4">
      <template #icon>
        <n-icon>
          <GameControllerOutline />
        </n-icon>
      </template>
      START GAME
    </n-button>
  </n-space>
</template>

<script setup>
import { GameControllerOutline } from "@vicons/ionicons5"
import { NButton, NSpace, NIcon } from "naive-ui"
import { defineComponent, ref } from "vue"

const loadingRef = ref(false)
const emit = defineEmits(['startGame'])

function handleClick() {
  emit('startGame', 'Start Game')
  loadingRef.value = true
  setTimeout(() => {
    loadingRef.value = false
  }, 2e3)
}
let loading = loadingRef.value
</script>
