import { useQuestionsStore } from '@/stores/questions'

export function extractCategories (checkedKey) {
  console.log(
    '🚀 ~ file: getRandomQuestions.js ~ line 4 ~ extractCategories ~ checkedKey',
    checkedKey
  )
  /**
   * Extract categories from checked category keys (See SelectCategories.vue).
   * E.g.: 'Quantum Chromodynamics (parent: High-Energy Physics (parent: Theory))'
   * -> {
   * category: 'Theory',
   * subCategory: 'High-Energy Physics',
   * specialCategory: 'Quantum Chromodynamics
   * }
   */
  const categoriesArray = checkedKey
    .split('(')
    .join('')
    .split(')')
    .join('')
    .split('parent: ')
  const categoryObject = {
    category: categoriesArray.slice(-1)[0].trim(),
    subCategory: categoriesArray.slice(-2, -1).length ? categoriesArray.slice(-2, -1)[0].trim() : '',
    specialCategory: categoriesArray.slice(-3, -2).length ? categoriesArray.slice(-3, -2)[0].trim() : ''
  }
  return categoryObject
}

export function getRandomQuestion (settings) {
  /**
   * Returns a random question respecting the settings constraints
   * @param settings Object containg the settings, e.g. difficulty and
   * question categories. Object format:
   * {
   *  difficulty: Range (List),
   *  categories: List
   * }
   */
  const allQuestions = useQuestionsStore().questions
  const { difficulty, categories } = settings
}
