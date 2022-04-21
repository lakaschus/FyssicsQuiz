import { expect, test } from "vitest"
import {
  getAllQuestionPaths,
  getMeta,
  verifyMeta,
  compileAllQuestions, getAllQuestions
} from "@/utils/questionHelpers/compileQuestions.js"

const meta1 = {
  author: "Phillip Yao-Lakaschus",
  title: "Is this a test question?",
  difficulty: 5,
  category: "Theory",
  subCategory: "High-Energy Physics",
  specialCategory: "Quantum Chromodynamics",
}
const meta2 = {
  author: "Phillip Yao-Lakaschus",
  title: "Is this a test question?",
  difficulty: 5,
  category: "Experiment",
  subCategory: "High-Energy Physics",
  specialCategory: "Quantum Chromodynamics",
}
const meta3 = {
  author: "Phillip Yao-Lakaschus",
  title: "Is this a test question?",
  difficulty: 10,
  category: "Experiment",
  subCategory: "Classical Mechanics",
  specialCategory: "",
}
const meta4 = {
  author: "Phillip Yao-Lakaschus",
  title: "Is this a test question?",
  difficulty: 1,
  category: "Theory",
  subCategory: "",
  specialCategory: "Superconductivity",
}
const meta5 = {
  author: "Phillip Yao-Lakaschus",
  title: "",
  difficulty: 5,
  category: "Theory",
  subCategory: "High-Energy Physics",
  specialCategory: "Quantum Chromodynamics",
}
const meta6 = {
  author: "Phillip Yao-Lakaschus",
  title: "",
  difficulty: 11,
  category: "Theory",
  subCategory: "High-Energy Physics",
  specialCategory: "Quantum Chromodynamics",
}

let questions = getAllQuestionPaths(
  import.meta.glob("../../../questions/__tests__/**/meta.json")
)

test("Get question paths", () => {
  expect(questions[0]).toBe("question1")
  expect(questions[1]).toBe("question2")
})

test("Get meta.json", async () => {
  const path = "@/questions/__tests__/" + questions[0] + "/meta.json"
  let metaJson = await getMeta(path)
  expect(metaJson.title).toBe("Is this a test question?")
  expect(metaJson.path).toBe("@/questions/__tests__/" + questions[0] + "/")
})

test("Verify category definition of meta.json", () => {
  expect(verifyMeta(meta1)).toBe(true)
  expect(verifyMeta(meta2)).toBe(false)
  expect(verifyMeta(meta3)).toBe(true)
  expect(verifyMeta(meta4)).toBe(false)
  expect(verifyMeta(meta5)).toBe(false)
  expect(verifyMeta(meta6)).toBe(false)
})

test("compileAllQuestions", async () => {
  const metas = []
  for (const ind in questions) {
    let meta = await getMeta(
      "@/questions/__tests__/" + questions[ind] + "/meta.json"
    )
    metas.push(meta)
  }
  const allQuestions = compileAllQuestions(metas)
  expect(allQuestions["Theory"]["High-Energy Physics"]["Quantum Chromodynamics"]["questions"][0]).toBe('@/questions/__tests__/question1/')
  expect(allQuestions["Experiment"]["Quantum Mechanics"]["questions"][0]).toBe('@/questions/__tests__/question2/')
})

test("getAllQuestions", async () => {
  const allQuestions = await getAllQuestions("questions/")
  console.log("🚀 ~ file: compileQuestions.spec.js ~ line 98 ~ test ~ allQuestions", allQuestions["Theory"]["High-Energy Physics"]["Quantum Chromodynamics"]["questions"][0])
  expect(allQuestions["Theory"]["Classical Mechanics"]["questions"][0]).toBe('@/questions/NewtonsLawsOfMotion/')
})