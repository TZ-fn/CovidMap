import type { Config } from '@jest/types';
const nextJest = require('next/jest');

const createJestConfig = nextJest({
  dir: './',
});

const customJestConfig: Config.InitialOptions = {
  verbose: true,
  moduleDirectories: ['node_modules', '.'],
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/setupTests.ts'],
};

module.exports = createJestConfig(customJestConfig);
