import { expect, test } from 'vitest'
import { resolveAfterNMilliSeconds } from '@/utils/timeUtils/timeoutPromise'

test('resolveAfterNMilliSeconds', async () => {
    const start = Date.now()
    const res = await resolveAfterNMilliSeconds(50)
    const duration = Date.now() - start
    
    console.log("🚀 ~ file: timeoutPromise.spec.js ~ line 8 ~ test ~ duration", duration)

    expect(duration).toBeGreaterThan(45)
    expect(duration).toBeLessThan(100)
    expect(res).toBe('resolveAfterNSeconds resolved')
})