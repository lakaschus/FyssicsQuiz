import { categories } from "@/config/categories.js"

export function getAllQuestionPaths(modules) {
  /**
   * @name compileQuestions Searches all existing questions and save them to storage
   * @param path Path specification starting from src/
   */
  const paths = []
  for (const path in modules) {
    paths.push(path.split("/").slice(-2, -1))
  }
  return paths.flat()
}

export async function getMeta(path) {
  /**
   * @name getMeta Return meta.json from specified path and append path
   * @param path Question path
   */
  let data = await import(path)
  // Append path
  data.default.path = path.split("meta.json")[0]
  return data.default
}

export function compileQuestion(data) {
  /**
   * Converts meta.json to hierarchical data format
   *
   * @param {Object} data Data from the meta.json
   */
}

export function verifyMeta(meta) {
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
      "🚀 ~ file: compileQuestions.js ~ line 45 ~ verifyMeta ~ meta.subCategory",
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
            console.log("Special category exists but is not correct")
            return false
          }
        } else {
          return true
        }
      } else {
        console.log("Subcategory exists but is not correct")
        return false
      }
    } else {
      console.log("Subcategory needs to be specified!")
      return false
    }
  } else {
    return false
  }
}

export function compileAllQuestions(data) {
  /**
   * Arranges all questions into efficiently searchable data structure
   *
   * @param {Object[]} data List of meta.json files corresponding to a unique question
   */
  const allQuestions = categories
  data.forEach((el, ind) => {
    if (verifyMeta(el)) {
      if (el.specialCategory) {
        allQuestions[el.category][el.subCategory][el.specialCategory][
          "questions"
        ].push(el.path)
      } else {
        allQuestions[el.category][el.subCategory]["questions"].push(el.path)
      }
    }
  })
  return allQuestions
}

export async function getAllQuestions(prefix = '@') {
  let questions = getAllQuestionPaths(
    import.meta.glob("../../questions/*/meta.json")
  )
  const metas = []
  for (const ind in questions) {
    let meta = await getMeta(prefix + "/questions/" + questions[ind] + "/meta.json")
    metas.push(meta)
  }
  console.log("METAS: ", metas)
  const allQuestions = compileAllQuestions(metas)
  return allQuestions
}
