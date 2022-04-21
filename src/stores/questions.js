import { defineStore } from "pinia"
import { getAllQuestions } from "@/utils/questionHelpers/compileQuestions.js"

export const useQuestionsStore = defineStore({
  id: "questions",
  state: () => ({
    questions: null,
  }),
  getters: {
    getQuestions: (state) => state,
  }
})
