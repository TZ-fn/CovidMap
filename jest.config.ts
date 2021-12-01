import type { Config } from '@jest/types';
const nextJest = require('next/jest');

const createJestConfig = nextJest({
  dir: './',
});

const customJestConfig: Config.InitialOptions = {
  verbose: true,
};

module.exports = createJestConfig(customJestConfig);
