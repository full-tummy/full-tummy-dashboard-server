const SRC_PATH = `${__dirname}/src`;
const ROOT_DIR = __dirname;

export default {
  clearMocks: false,
  collectCoverage: true,
  coverageDirectory: 'coverage',
  coverageProvider: 'v8',
  testEnvironment: 'node',
  testMatch: ['**/**/**/*.test.ts'],
  moduleDirectories: ['node_modules', 'src', ROOT_DIR],
  roots: [SRC_PATH],
  moduleNameMapper: {
    '@services/(.*)': `${SRC_PATH}/services/$1`,
    '@libs/(.*)': `${SRC_PATH}/libs/$1`,
    '@schemas/(.*)': `${SRC_PATH}/schemas/$1`,
    '@utils/(.*)': `${SRC_PATH}/utils/$1`,
    '@models/(.*)': `${SRC_PATH}/models/$1`,
    '@interfaces/(.*)': `${SRC_PATH}/interfaces/$1`,
  },
  setupFiles: [`${ROOT_DIR}/setEnvVars.js`],
};
