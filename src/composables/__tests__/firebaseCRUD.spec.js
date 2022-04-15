import getCollection from '../getCollection'
import { expect, test } from 'vitest'
import createDoc from '../createDoc'
import { getDocById } from '../getDoc'
import { mainCollectionName } from '@/firebase/config.js'

test('create document and fetch that document by id', async () => {
    const date = Date.now()
    const data = {createdAt: date, test: 'test'}
    
    // Create new doc with data contents
    const docRef = await createDoc(mainCollectionName, data)
    // Get id of created document
    const docId = docRef.id
    // Fetch new document using its id
    const readData = await getDocById(docId)

    expect(data.createdAt).toBe(readData.createdAt)
    expect(data.test).toBe(readData.test)
})

