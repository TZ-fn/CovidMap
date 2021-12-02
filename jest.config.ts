// import type { Config } from '@jest/types';
// const nextJest = require('next/jest');

// const createJestConfig = nextJest({
//   dir: './',
// });

// const customJestConfig: Config.InitialOptions = {
//   verbose: true,
//   moduleDirectories: ['node_modules', '.'],
//   testEnvironment: 'jsdom',
// };
// module.exports = createJestConfig(customJestConfig);

import type { Config } from '@jest/types';

const config: Config.InitialOptions = {
  verbose: true,
  moduleDirectories: ['node_modules', '.'],
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/setupTests.ts'],
};
export default config;
