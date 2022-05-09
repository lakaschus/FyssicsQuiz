import { expect, it, describe, beforeAll } from 'vitest'
import { getAllQuestions } from '../compileQuestions'
import { extractCategories, getRandomQuestion } from '../getRandomQuestions'

const categories = [
  'Quantum Chromodynamics (parent: High-Energy Physics (parent: Theory))',
  'Classical Mechanics (parent: Theory)',
  'Standard Model (parent: High-Energy Physics (parent: Theory))',
  'Quantum Electrodynamics (parent: High-Energy Physics (parent: Theory))',
  'Lagrangian Mechanics (parent: Classical Mechanics (parent: Theory))',
  'Hamiltonian Mechanics (parent: Classical Mechanics (parent: Theory))',
  'Kinematics (parent: Classical Mechanics (parent: Theory))',
  'Kinetics (parent: Classical Mechanics (parent: Theory))'
]

describe('Get collection of random questions', function () {
  beforeAll(async () => {
    // creates a fresh pinia and make it active so it's automatically picked
    // up by any useStore() call without having to pass it to it:
    // `useStore(pinia)`
    const allQuestions = await getAllQuestions()
  })
  it('Convert checked key to category object', function () {
    const categoriesObject1 = extractCategories(categories[0])
    const categoriesObject2 = extractCategories(categories[1])
    expect(categoriesObject1.category).toBe('Theory')
    expect(categoriesObject1.subCategory).toBe('High-Energy Physics')
    expect(categoriesObject1.specialCategory).toBe('Quantum Chromodynamics')
    expect(categoriesObject2.category).toBe('Theory')
    expect(categoriesObject2.subCategory).toBe('Classical Mechanics')
    expect(categoriesObject2.specialCategory).toBe('')
  })
  it('Get a single question', function () {
    const questionPath = getRandomQuestion({ difficulty: [2, 5], categories })
    expect(questionPath).toBe()
  })
})
