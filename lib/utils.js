const problemChild = /&quot;/g

const parseString = str => {
  if (str.includes('&quot')) {
    return str.replace(problemChild, '"')
  }
  return str
}

module.exports = {
  parseString
}
