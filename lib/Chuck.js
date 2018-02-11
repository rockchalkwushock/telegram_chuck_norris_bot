// https://api.icndb.com
const fetch = require('isomorphic-fetch')

const { parseString } = require('./utils')

const fetchRandomJoke = async () => {
  try {
    const res = await fetch('https://api.icndb.com/jokes/random')
    const data = await res.json()
    /* istanbul ignore else */
    if (data.type === 'success') {
      return parseString(data.value.joke)
    }
  } catch (e) {
    /* istanbul ignore next */
    throw new Error("Chuck Norris doesn't throw errors!")
  }
}

module.exports = {
  fetchRandomJoke
}
