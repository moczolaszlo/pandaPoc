module.exports = {
  extends: ['plugin:@bitrise/config', 'plugin:storybook/recommended'],
  parserOptions: {
    project: ['./tsconfig.json', './.eslint-tsconfig.json'],
    tsconfigRootDir: __dirname,
  },
  rules: {
    '@typescript-eslint/no-explicit-any': 'warn',
    /** * Import related rules ** */
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: ['**/*.examples.tsx', '**/*.stories.tsx', '**/*.test.tsx', 'spec/**/*.*'],
      },
    ],
    'no-param-reassign': ['error', { props: false }],
    'no-process-env': 'error',
    'react/react-in-jsx-scope': 'off',
    'react-hooks/exhaustive-deps': 'off',
  },
  settings: {
    'import/internal-regex': '^@/',
  },
  ignorePatterns: ['postcss.config.cjs'],
};
