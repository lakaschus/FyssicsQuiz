import { createApp } from 'vue'
import { createPinia } from 'pinia'
import './index.css'
import VueMathjax from 'vue-mathjax-next'
import '@formkit/themes/genesis'

import { useQuestionsStore } from '@/stores/questions'
import { getAllQuestions } from '@/utils/questionHelpers/compileQuestions.js'

import App from './App.vue'
import router from './router'

// Create App
const app = createApp(App)

app.use(createPinia())
app.use(VueMathjax)
app.use(router)
app.mount('#app')

// Initially load all questions into storage
const questions = useQuestionsStore()
const importQuestions = await getAllQuestions('../..')
questions.$patch({ questions: importQuestions })
