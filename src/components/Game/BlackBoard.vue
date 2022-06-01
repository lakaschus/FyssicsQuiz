<template lang="">
  <canvas class="min-h-full" id="blackboard"> </canvas>
  <canvas class="min-h-full" id="blackboard2"> </canvas>
</template>
<script setup>
import { fabric } from "fabric"
import { onMounted } from "vue"
import rect from "@/composables/fabric/example"
import freeDrawing from "@/composables/fabric/freeDrawing"

onMounted(() => {
  const canvas = new fabric.Canvas("blackboard")
  canvas.add(rect)
  freeDrawing(blackboard2)
})
</script>
<style lang=""></style>
