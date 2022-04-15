import { expect, test } from 'vitest'
import { getAllQuestionPaths, getMeta } from '@/utils/questionHelpers/compileQuestions.js'

test('Get question paths', () => {
    let questions = getAllQuestionPaths(import.meta.glob("../../../questions/__tests__/**/meta.json"))
    expect(questions[0]).toBe("question1")
    expect(questions[1]).toBe("question2")
})

test('Get meta.json', async () => {
    const path = "@/questions/__tests__/question1/meta.json"
    let metaJson = await getMeta(path)
    expect(metaJson.title).toBe('Is this a test question?')
})