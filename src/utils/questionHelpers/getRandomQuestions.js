import { useQuestionsStore } from '@/stores/questions'
import { getMeta } from './compileQuestions'

export function extractCategories (checkedKey) {
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
    subCategory: categoriesArray.slice(-2, -1).length
      ? categoriesArray.slice(-2, -1)[0].trim()
      : '',
    specialCategory: categoriesArray.slice(-3, -2).length
      ? categoriesArray.slice(-3, -2)[0].trim()
      : ''
  }
  return categoryObject
}

export async function getRandomQuestion (settings) {
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
  const difficulty = settings.difficulty
  const categories = settings.categories

  let selectedQuestionPaths

  for (let i = 0; i < 100; i++) {
    const category = categories[Math.floor(Math.random() * categories.length)]
    const categoryObject = extractCategories(category)

    let maxLevel = -1
    for (const key in categoryObject) {
      if (categoryObject[key]) {
        maxLevel++
      }
    }
    const randomLevel = Math.floor(Math.random() * (maxLevel + 1))
    if (randomLevel === 0) {
      selectedQuestionPaths = allQuestions[categoryObject.category].questions
    }
    if (randomLevel === 1) {
      selectedQuestionPaths =
        allQuestions[categoryObject.category][categoryObject.subCategory]
          .questions
    }
    if (randomLevel === 2) {
      selectedQuestionPaths =
        allQuestions[categoryObject.category][categoryObject.subCategory][
          categoryObject.specialCategory
        ].questions
    }

    if (selectedQuestionPaths.length === 0) {
      continue
    }

    const selectedQuestion =
      selectedQuestionPaths[
        Math.floor(Math.random() * selectedQuestionPaths.length)
      ]

    const metaInfo = await getMeta(selectedQuestion + 'meta.json')
    if (
      metaInfo.difficulty > difficulty[0] &&
      metaInfo.difficulty < difficulty[1]
    ) {
      return selectedQuestion
    }
  }
  return 'No fitting question found after 100 tries!'
}
