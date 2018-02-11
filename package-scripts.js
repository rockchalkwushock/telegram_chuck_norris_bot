const npsUtils = require('nps-utils')

const { rimraf, series } = npsUtils

module.exports = {
  scripts: {
    clean: series(rimraf('coverage')),
    commit: 'git cz',
    dev: "nodemon --exec 'micro-bot -e'",
    reportCoverage: 'codecov',
    test: {
      default: 'jest --runInBand --updateSnapshot',
      config: series.nps('test --showConfig'),
      coverage: series.nps('test --coverage'),
      watch: series.nps('test --watch')
    },
    validate: {
      default: 'snyk test',
      patch: 'snyk wizard'
    }
  }
}
