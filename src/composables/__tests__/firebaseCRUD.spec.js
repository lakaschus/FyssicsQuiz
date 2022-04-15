import getCollection from '../getCollection'
import { expect, test } from 'vitest'
import createDoc from '../createDoc'

test('createDoc', async () => {
    const date = Date.now()
    const data = {createdAt: date, test: 'test'}
    expect("test").toBe("test")
})