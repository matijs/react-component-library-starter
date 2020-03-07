// https://jestjs.io/docs/en/configuration.html

module.exports = {
    clearMocks: true,
    coverageDirectory: '__coverage__',
    preset: 'ts-jest',
    rootDir: './src',
    setupFilesAfterEnv: ['<rootDir>/__tests__/jest.setup.ts'],
    snapshotSerializers: ['enzyme-to-json/serializer'],
    testPathIgnorePatterns: ['/node_modules/', 'jest.setup.ts'],
};
