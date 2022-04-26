<template lang="">
  <DynamicComponent path="./../../questions/__tests__/question1/question.vue" />
  <DynamicComponent path="./../../questions/NewtonsLawsOfMotion/question.vue" />
  <DynamicComponent path="./../../questions/NewtonsLawsOfMotion/answer.vue" />
</template>
<script>
import DynamicComponent from "@/components/Dynamics/DynamicComponent.vue"
import { getAllQuestions } from "@/utils/questionHelpers/compileQuestions.js"

export default {
  components: {
    DynamicComponent,
  },
  data() {
    return {
      allQuestions: null,
    }
  },
  mounted() {
    getAllQuestions().then((data) => {
      this.allQuestions = data
      console.log("🚀 ~ file: index.vue ~ line 22 ~ getAllQuestions ~ this.allQuestions", this.allQuestions)
    })
  },
}
</script>
<style lang=""></style>
