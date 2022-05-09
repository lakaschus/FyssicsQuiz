import { expect, it, describe } from 'vitest'
import { getRandomQuestion } from '../getRandomQuestions'

const categories = [
  'Quantum Chromodynamics (parent: High-Energy Physics (parent: Theory))',
  'Standard Model (parent: High-Energy Physics (parent: Theory))',
  'Quantum Electrodynamics (parent: High-Energy Physics (parent: Theory))',
  'Classical Mechanics (parent: Theory)',
  'Lagrangian Mechanics (parent: Classical Mechanics (parent: Theory))',
  'Hamiltonian Mechanics (parent: Classical Mechanics (parent: Theory))',
  'Kinematics (parent: Classical Mechanics (parent: Theory))',
  'Kinetics (parent: Classical Mechanics (parent: Theory))'
]

describe('Get collection of random questions', function () {
  it('Get a single question', function () {
    const questionPath = getRandomQuestion({ difficulty: [2, 5], categories })
    expect(questionPath).toBe()
  })
})
