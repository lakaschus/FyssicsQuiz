import { test } from 'vitest'

async function testFunction (prefix = '@') {
  if (prefix === '@') {
    console.log('tests.spec.js TRUE')
  } else {
    console.log('tests.spec.js FALSE')
  }
}

test('Get question paths', async () => {
  const val = await testFunction()
  console.log('🚀 ~ file: tests.spec.js ~ line 12 ~ test ~ val', val)
})
