<template>
  <n-grid x-gap="12" :cols="4">
    <n-gi :span="3"> <canvas id="blackboard"></canvas> </n-gi>
    <n-gi :span="1">
      <n-button id="drawing-mode"></n-button>
      <n-button id="clear-canvas"></n-button>
      <n-select id="drawing-mode-selector"></n-select>
      <n-input id="drawing-color"></n-input>
      <n-input id="drawing-shadow-color"></n-input>
    </n-gi>
  </n-grid>
</template>
<script setup>
import { NGrid, NGi, NButton, NSelect, NInput } from "naive-ui";
import { onMounted } from "vue";
import freeDrawing from "@/composables/fabric/freeDrawing";

onMounted(() => {
  freeDrawing("blackboard");
});
</script>
<style lang=""></style>
