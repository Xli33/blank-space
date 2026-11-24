import globals from 'globals';
import pluginJs from '@eslint/js';
import pluginOxlint from 'eslint-plugin-oxlint';
import skipFormatting from 'eslint-config-prettier/flat';

export default [
  {
    ignores: ['.husky/', 'dist/']
  },
  pluginJs.configs.recommended,
  {
    files: ['src/**/*.{js,mjs}'],
    languageOptions: {
      // ecmaVersion: 'latest', default: "latest"
      globals: globals.browser
    }
  },
  {
    files: ['*.js'],
    languageOptions: {
      globals: globals.node
    }
  },

  ...pluginOxlint.buildFromOxlintConfigFile('.oxlintrc.json'),
  skipFormatting,
  {
    rules: {
      // '@typescript-eslint/no-unused-vars': ['error', { args: 'none' }],
      // 'vue/multi-word-component-names': 'off',
      'no-prototype-builtins': 'off',
      'no-debugger': 'off',
      'no-unused-vars': [
        'error',
        {
          // vars: 'all',
          // args: 'after-used',
          caughtErrors: 'none'
          // ignoreRestSiblings: false,
          // reportUsedIgnorePattern: false
        }
      ],
      'no-empty': ['error', { allowEmptyCatch: true }]
    }
  }
];
