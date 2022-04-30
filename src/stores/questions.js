import { defineStore } from 'pinia'

export const useQuestionsStore = defineStore({
  id: 'questions',
  state: () => ({
    questions: null
  }),
  getters: {
    getQuestions: state => state
  }
})
