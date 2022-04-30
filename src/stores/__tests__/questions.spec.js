import { setActivePinia, createPinia } from 'pinia'
import { useCounterStore } from '@/stores/counter'
import { useQuestionsStore } from '@/stores/questions'
import { expect, describe, it, beforeEach, beforeAll } from 'vitest'
import { getAllQuestions } from '@/utils/questionHelpers/compileQuestions.js'

describe('Counter Store', () => {
  beforeEach(() => {
    // creates a fresh pinia and make it active so it's automatically picked
    // up by any useStore() call without having to pass it to it:
    // `useStore(pinia)`
    setActivePinia(createPinia())
  })

  it('increments', () => {
    const counter = useCounterStore()
    expect(counter.counter).toBe(0)
    counter.increment()
    expect(counter.counter).toBe(1)
  })

  it('increments by amount', () => {
    const counter = useCounterStore()
    counter.increment()
    const counter2 = useCounterStore()
    counter2.increment()
    expect(counter2.counter).toBe(2)
  })
})

describe('Question Store', () => {
  beforeAll(() => {
    // creates a fresh pinia and make it active so it's automatically picked
    // up by any useStore() call without having to pass it to it:
    // `useStore(pinia)`
    setActivePinia(createPinia())
  })

  it('get all questions', async () => {
    const questions = useQuestionsStore()
    const importQuestions = await getAllQuestions()
    questions.$patch({ questions: importQuestions })
    console.log(
      '🚀 ~ file: questions.spec.js ~ line 41 ~ it ~ questions',
      questions.questions.Theory['Classical Mechanics'].questions[0]
    )
    expect(
      questions.questions.Theory['Classical Mechanics'].questions[0]
    ).toBe('@/questions/NewtonsLawsOfMotion/')
  })
})
