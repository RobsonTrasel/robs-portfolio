const nextJest = require('next/jest')

const createJestConfig = nextJest({
  dir: './'
})

const customJestConfig = {
	setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
	moduleDirectories: ['node_modules', __dirname],
	moduleNameMapper: {
		'\\.svg': '<rootDir>/__mocks__/svg.js',
		'\\.(jpg|jpeg|png|gif|ico|eot|otf|webp|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
			'<rootDir>/__mocks__/fileMock.js',
		// Components
		'^Atoms(.*)$': '<rootDir>/src/components/atoms$1',
		'^Molecules(.*)$': '<rootDir>/src/components/molecules$1',
		'^Organisms(.*)$': '<rootDir>/src/components/organisms$1',
		'^Species(.*)$': '<rootDir>/src/components/species$1',
		'^Templates(.*)$': '<rootDir>/src/components/templates$1',
		// Other folders
		'^@types(.*)$': '<rootDir>/@types$1',
		'^Config(.*)$': '<rootDir>/src/config$1',
		'^Hooks(.*)$': '<rootDir>/src/hooks$1',
		'^MockData(.*)$': '<rootDir>/src/mocks$1',
		'^Pages(.*)$': '<rootDir>/src/pages$1',
		'^Public(.*)$': '<rootDir>/public$1',
		'^Utils(.*)$': '<rootDir>/src/utils$1',
	},
	watchPlugins: [
		'jest-watch-typeahead/filename',
		'jest-watch-typeahead/testname',
		'jest-watch-select-projects',
	],
	testEnvironment: 'jest-environment-jsdom',
};

module.exports = createJestConfig(customJestConfig);