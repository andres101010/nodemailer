/** @type {import('jest').Config} */
export default {
  preset: 'ts-jest/presets/default-esm',
  testEnvironment: 'node',
  // extensionsToTreatAsEsm: ['.ts'],
  moduleFileExtensions: ['ts', 'js', 'json', 'node'],
  transform: {
    '^.+\\.ts$': ['ts-jest', {
      useESM: true
    }]
  },
  moduleNameMapper: {
    '^(\\.{1,2}/.*)\\.js$': '$1'
  },
  roots: ['test'],
}


// jest.config.js
// module.exports = {
//   preset: 'ts-jest',
//   testEnvironment: 'node',
//   roots: ['<rootDir>/test'],
//   transform: {
//     '^.+\\.tsx?$': 'ts-jest',
//   },
//   moduleFileExtensions: ['ts', 'js', 'json', 'node'],
//   globals: {
//     'ts-jest': {
//       isolatedModules: true,
//     },
//   },
// };
