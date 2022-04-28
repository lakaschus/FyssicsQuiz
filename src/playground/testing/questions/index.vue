<template lang="">
  <h3>Categories:</h3>
  <n-tabs size="large" justify-content="space-evenly" v-if="allQuestions">
    <n-tab-pane :name="key" :tab="key" v-for="key in Object.keys(allQuestions)">
      <h3>Subcategories:</h3>
      <n-tabs size="large" justify-content="space-evenly" v-if="allQuestions">
        <n-tab-pane
          :name="subKey"
          :tab="subKey"
          v-for="subKey in Object.keys(allQuestions[key])"
        >
          <div v-if="allQuestions[key][subKey] && subKey == 'questions'">
            <n-collapse v-for="path in allQuestions[key][subKey]">
              <n-collapse-item
                v-if="path.length"
                :title="path.split('/').slice(-2, -1)[0]"
              >
                <h4>Question</h4>
                <DynamicComponent :path="'./' + path + 'question.vue'" />
                <h4>Answer</h4>
                <DynamicComponent :path="'./' + path + 'answer.vue'" />
              </n-collapse-item>
            </n-collapse>
          </div>
          <h3>Special Categories:</h3>
          <n-tabs
            size="large"
            justify-content="space-evenly"
            v-if="allQuestions"
          >
            <n-tab-pane
              :name="subSubKey"
              :tab="subSubKey"
              v-for="subSubKey in Object.keys(allQuestions[key][subKey])"
            >
              <div
                v-if="
                  allQuestions[key][subKey][subSubKey] &&
                  subSubKey == 'questions'
                "
              >
                paths: {{ allQuestions[key][subKey][subSubKey] }}
                <n-collapse
                  v-for="path in allQuestions[key][subKey][subSubKey]"
                >
                  <n-collapse-item
                    v-if="path.length"
                    :title="path.split('/').slice(-2, -1)[0]"
                  >
                    <h4>Question</h4>
                    <DynamicComponent :path="'./' + path + 'question.vue'" />
                    <h4>Answer</h4>
                    <DynamicComponent :path="'./' + path + 'answer.vue'" />
                  </n-collapse-item>
                </n-collapse>
              </div>
              <div
                v-if="
                  allQuestions[key][subKey][subSubKey]['questions']
                "
              >
              {{allQuestions[key][subKey][subSubKey]['questions']}}
                <n-collapse
                  v-for="path in allQuestions[key][subKey][subSubKey]['questions']"
                >
                  <n-collapse-item
                    v-if="path.length"
                    :title="path.split('/').slice(-2, -1)[0]"
                  >
                    <h4>Question</h4>
                    <DynamicComponent :path="'./' + path + 'question.vue'" />
                    <h4>Answer</h4>
                    <DynamicComponent :path="'./' + path + 'answer.vue'" />
                  </n-collapse-item>
                </n-collapse>
              </div>
            </n-tab-pane>
          </n-tabs>
        </n-tab-pane>
      </n-tabs>
    </n-tab-pane>
  </n-tabs>
</template>
<script>
import DynamicComponent from "@/components/Dynamics/DynamicComponent.vue"
import { getAllQuestions } from "@/utils/questionHelpers/compileQuestions.js"
import { NCard, NTabs, NTabPane, NCollapse, NCollapseItem } from "naive-ui"

export default {
  components: {
    DynamicComponent,
    NCard,
    NTabs,
    NTabPane,
    NCollapse,
    NCollapseItem,
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
