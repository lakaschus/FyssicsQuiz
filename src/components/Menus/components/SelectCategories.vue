<template>
  <n-checkbox-group>
    <n-grid v-model:value="categories" :cols="Object.keys(allQuestions).length">
      <n-gi :key="key" v-for="key in Object.keys(allQuestions)">
        <n-checkbox size="large" :value="key" :label="key" />
      </n-gi>
    </n-grid>
  </n-checkbox-group>
</template>
<script setup>
import { defineComponent, ref } from "vue"
import { NSpace, NCheckbox, NCheckboxGroup, NGi, NGrid } from "naive-ui"
import { useQuestionsStore } from "@/stores/questions"

const categories = ref(null)
const allQuestions = useQuestionsStore().questions
</script>
<style></style>
