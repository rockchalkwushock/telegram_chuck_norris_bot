const { parseString } = require('../lib/utils')

describe('Utils', () => {
  describe('parseString(str)', () => {
    const testString =
      'Jack said &quot;Chuck Norris three times and died from fright.&quot;'
    test('should return a "hello"', () => {
      expect(parseString('hello')).toEqual('hello')
    })
    test('should return a "Jack said "Chuck Norris three times and died from fright.""', () => {
      expect(parseString(testString)).toEqual(
        'Jack said "Chuck Norris three times and died from fright."'
      )
    })
  })
})
