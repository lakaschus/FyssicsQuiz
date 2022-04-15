import { defineStore } from 'pinia'

export const useQuestionsStore = defineStore({
  id: 'questions',
  state: () => ({
    questions: {}
  }),
  getters: {
    getQuestions: (state) => state
  },
  actions: {
    addQuestion(question) {
      this.questions.push({})
    }
  }
})