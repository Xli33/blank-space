import globals from 'globals';
import pluginJs from '@eslint/js';

export default [
  {
    ignores: ['.husky/', 'dist/']
  },
  {
    files: ['src/**/*.{js,mjs}'],
    languageOptions: {
      // ecmaVersion: 'latest', default: "latest"
      globals: globals.browser
    }
  },
  pluginJs.configs.recommended,
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
