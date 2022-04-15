import getCollection from '../getCollection'
import createDoc from '../createDoc'
import { assert, expect, test } from 'vitest'
import { nextTick } from 'vue'
import { resolveAfterNMilliSeconds } from '@/utils/timeUtils/timeoutPromise'

test('getCollection', async () => { 
    const {documents: chats} = getCollection("chats",
    ['owner', '==', 'niFeEAAtXabKlDlkWvCRTGUj6qi2'])
    await resolveAfterNMilliSeconds(10)
    // console.log("chats", chats)
    expect("test").toBe("test")
})