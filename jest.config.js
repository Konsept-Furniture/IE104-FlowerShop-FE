const { defaults } = require('jest-config')
module.exports = {
   moduleFileExtensions: [...defaults.moduleFileExtensions, 'js', 'jsx'],
   moduleNameMapper: {
      '^@(.*)$': '<rootDir>/src$1'
   }
}
