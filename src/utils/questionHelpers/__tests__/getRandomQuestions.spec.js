import { useQuestionsStore } from '@/stores/questions'
import { setActivePinia, createPinia } from 'pinia'
import { expect, it, describe, beforeAll } from 'vitest'
import { getAllQuestions } from '../compileQuestions'
import { extractCategories, getRandomQuestion } from '../getRandomQuestions'

const categories = [
  'Quantum Chromodynamics (parent: High-Energy Physics (parent: Theory))',
  'Classical Mechanics (parent: Theory)',
  'Linear Algebra (parent: Mathematics)',
  'Standard Model (parent: High-Energy Physics (parent: Theory))',
  'Quantum Electrodynamics (parent: High-Energy Physics (parent: Theory))',
  'Lagrangian Mechanics (parent: Classical Mechanics (parent: Theory))',
  'Hamiltonian Mechanics (parent: Classical Mechanics (parent: Theory))',
  'Kinematics (parent: Classical Mechanics (parent: Theory))',
  'Kinetics (parent: Classical Mechanics (parent: Theory))'
]

describe('Get collection of random questions', async function () {
  beforeAll(async () => {
    // creates a fresh pinia and make it active so it's automatically picked
    // up by any useStore() call without having to pass it to it:
    // `useStore(pinia)`+
    setActivePinia(createPinia())
    const questions = useQuestionsStore()
    const importQuestions = await getAllQuestions()
    questions.$patch({ questions: importQuestions })
  })
  it('Convert checked key to category object', function () {
    const categoriesObject1 = extractCategories(categories[0])
    const categoriesObject2 = extractCategories(categories[1])
    const categoriesObject3 = extractCategories(categories[2])
    expect(categoriesObject1.category).toBe('Theory')
    expect(categoriesObject1.subCategory).toBe('High-Energy Physics')
    expect(categoriesObject1.specialCategory).toBe('Quantum Chromodynamics')
    expect(categoriesObject2.category).toBe('Theory')
    expect(categoriesObject2.subCategory).toBe('Classical Mechanics')
    expect(categoriesObject2.specialCategory).toBe('')
    expect(categoriesObject3.category).toBe('Mathematics')
    expect(categoriesObject3.subCategory).toBe('Linear Algebra')
    expect(categoriesObject3.specialCategory).toBe('')
  })
  it('Get a single question', async function () {
    for (let i = 0; i < 10; i++) {
      const questionPath = await getRandomQuestion({
        difficulty: [1, 9],
        categories: [
          'Quantum Chromodynamics (parent: High-Energy Physics (parent: Theory))',
          'Classical Mechanics (parent: Theory)',
          'Linear Algebra (parent: Mathematics)'
        ]
      })
      expect(questionPath).toContain('@/questions/')
      console.log(
        '🚀 ~ file: getRandomQuestions.spec.js ~ line 54 ~ questionPath',
        questionPath
      )
    }
  })
})
