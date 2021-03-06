import { categories } from '@/config/categories.js'

export function getAllQuestionPaths (modules) {
  console.log(
    '🚀 ~ file: compileQuestions.js ~ line 4 ~ getAllQuestionPaths ~ modules',
    modules
  )
  /**
   * @name compileQuestions Searches all existing questions and save them to storage
   * @param path Path specification starting from src/
   */
  const paths = []
  for (const path in modules) {
    const splittedPath = path.split('/')
    paths.push(splittedPath.slice(-2 - (splittedPath.length - 5), -1).join('/'))
  }
  return paths.flat()
}

export async function getMeta (path) {
  /**
   * @name getMeta Return meta.json from specified path and append path
   * @param path Question path
   */
  const data = await import(path)
  // Append path
  data.default.path = path.split('meta.json')[0]
  return data.default
}

export function compileQuestion (data) {
  /**
   * Converts meta.json to hierarchical data format
   *
   * @param {Object} data Data from the meta.json
   */
}

export function verifyMeta (meta) {
  /**
   * Verifies if the meta.json has the correct formats.
   * In particular, it is checked whether the categories are defined correctly
   */
  // Verify that title exists, difficulty is between 1-10 and category exists
  if (
    meta.difficulty > 0 &&
    meta.difficulty < 11 &&
    meta.title &&
    meta.category in categories
  ) {
    console.log(
      '🚀 ~ file: compileQuestions.js ~ line 45 ~ verifyMeta ~ meta.subCategory',
      meta.subCategory
    )
    if (meta.subCategory) {
      if (meta.subCategory in categories[meta.category]) {
        if (meta.specialCategory) {
          if (
            meta.specialCategory in categories[meta.category][meta.subCategory]
          ) {
            return true
          } else {
            console.log('Special category exists but is not correct')
            return false
          }
        } else {
          return true
        }
      } else {
        console.log('Subcategory exists but is not correct')
        return false
      }
    } else {
      if (!meta.specialCategory) {
        return true
      } else {
        console.log('There must not be a special category without subcategory!')
        return false
      }
    }
  } else {
    return false
  }
}

export function compileAllQuestions (data) {
  /**
   * Arranges all questions into efficiently searchable data structure
   *
   * @param {Object[]} data List of meta.json files corresponding to a unique question
   */
  const allQuestions = categories
  data.forEach((el, ind) => {
    if (verifyMeta(el)) {
      if (el.specialCategory) {
        allQuestions[el.category][el.subCategory][
          el.specialCategory
        ].questions.push(el.path)
      }
      if (el.subCategory) {
        allQuestions[el.category][el.subCategory].questions.push(el.path)
      } else {
        allQuestions[el.category].questions.push(el.path)
      }
    }
  })
  return allQuestions
}

export async function getAllQuestions (prefix = '@') {
  const questions = getAllQuestionPaths(
    import.meta.glob('../../questions/**/meta.json')
  )
  const metas = []
  for (const ind in questions) {
    const meta = await getMeta(
      prefix + '/questions/' + questions[ind] + '/meta.json'
    )
    metas.push(meta)
  }
  console.log('METAS: ', metas)
  const allQuestions = compileAllQuestions(metas)
  console.log(
    '🚀 ~ file: compileQuestions.js ~ line 116 ~ getAllQuestions ~ allQuestions',
    allQuestions
  )
  return allQuestions
}

export function createCategoryTree (allQuestions, parent = null) {
  /**
   * Creates a recursive tree containing all categories as labels and keys
   * @param allQuestions data structure containing all questions
   * @param level Denotes the current tree level; needed to create unique keys
   *
   */
  const arr = []
  const labels = Object.keys(allQuestions)
  if (labels.length > 1) {
    for (const key in labels) {
      const parentString = parent ? ' (parent: ' + parent + ')' : ''
      if (labels[key] !== 'questions') {
        arr.push({
          label: labels[key],
          key: parent ? labels[key] + parentString : labels[key],
          children: createCategoryTree(
            allQuestions[labels[key]],
            labels[key] + parentString
          )
        })
      } else {
        arr.push({
          label: 'Uncategorized',
          key: 'Uncategorized' + parentString
        })
      }
    }
    return arr
  } else {
    return null
  }
}
