<template lang="">
  <n-tabs size="large" justify-content="space-evenly" v-if="allQuestions">
    <n-tab-pane
      :name="key"
      :tab="key"
      v-for="key in Object.keys(this.allQuestions)"
    >
        <n-tabs size="large" justify-content="space-evenly" v-if="allQuestions">
    <n-tab-pane
      :name="subKey"
      :tab="subKey"
      v-for="subKey in Object.keys(this.allQuestions[key])"
    >
        <n-tabs size="large" justify-content="space-evenly" v-if="allQuestions">
    <n-tab-pane
      :name="subSubKey"
      :tab="subSubKey"
      v-for="subSubKey in Object.keys(this.allQuestions[key][subKey])"
    >
      {{ key }}
    </n-tab-pane>
  </n-tabs>
    </n-tab-pane>
  </n-tabs>
    </n-tab-pane>
  </n-tabs>
  <DynamicComponent path="./../../questions/__tests__/question1/question.vue" />
  <DynamicComponent path="./../../questions/NewtonsLawsOfMotion/question.vue" />
  <DynamicComponent path="./../../questions/NewtonsLawsOfMotion/answer.vue" />
</template>
<script>
import DynamicComponent from "@/components/Dynamics/DynamicComponent.vue"
import { getAllQuestions } from "@/utils/questionHelpers/compileQuestions.js"
import { NCard, NTabs, NTabPane } from "naive-ui"

export default {
  components: {
    DynamicComponent,
    NCard,
    NTabs,
    NTabPane,
  },
  data() {
    return {
      allQuestions: null,
    }
  },
  mounted() {
    getAllQuestions("../..").then((data) => {
      this.allQuestions = data
      console.log(
        "🚀 ~ file: index.vue ~ line 22 ~ getAllQuestions ~ this.allQuestions",
        Object.keys(this.allQuestions)
      )
    })
  },
}
</script>
<style lang=""></style>
