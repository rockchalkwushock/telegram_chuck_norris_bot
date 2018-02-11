const { fetchRandomJoke } = require('../lib/Chuck.js')

describe('Chuck Norris API', () => {
  test('should return a joke', async () => {
    try {
      const res = await fetchRandomJoke()
      expect(typeof res === 'string').toBeTruthy()
      expect(res.includes('Chuck Norris')).toBeTruthy()
    } catch (e) {
      throw e
    }
  })
})
