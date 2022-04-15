export function getAllQuestionPaths(modules) {
  /**
   * @name compileQuestions Searches all existing questions and save them to storage
   * @param path Path specification starting from src/
   */
  const paths = []
  for (const path in modules) {
    paths.push(path.split('/').slice(-2, -1))
  }
  return paths.flat()
}

export async function getMeta(path) {
    /**
     * @name getMeta Return meta.json from specified path
     * @param path Question path
     */
    let data = await import(path)
    console.log("🚀 ~ file: compileQuestions.js ~ line 21 ~ getMeta ~ metaJson", data)
    return data.default
}

export function compileQuestion(data) {
/**
 * TODO...
 */
}

export function compileAllQuestions(data) {
/**
 * TODO
 */
}