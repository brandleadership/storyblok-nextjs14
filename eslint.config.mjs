import globals from 'globals';
import pluginJs from '@eslint/js';
import pluginReact from 'eslint-plugin-react';
import ts from 'typescript-eslint';
import js from '@eslint/js';
import prettierConfigRecommended from 'eslint-plugin-prettier/recommended';

export default [
    js.configs.recommended,
    ...ts.configs.recommended,
    prettierConfigRecommended,
    {
        files: ['**/*.{js,mjs,cjs,jsx}'],
    },

    {
        languageOptions: {
            parserOptions: {
                // Set parser options for parsing JSX
                ecmaFeatures: { jsx: true },
                ecmaVersion: 2021,
                sourceType: 'module',
            },
            globals: globals.browser, // Add browser global variables
        },
    },
    pluginJs.configs.recommended,
    {
        ...pluginReact.configs.flat.recommended,
        settings: {
            react: {
                version: 'detect',
            },
        },
    },
    { ignores: ['.next/*'] },
    {
        rules: {
            'prettier/prettier': [
                'error',
                {
                    endOfLine: 'auto',
                },
            ],
            '@typescript-eslint/no-unused-expressions': [
                'error',
                {
                    allowShortCircuit: false, // Default value if not set
                    allowTernary: false, // Default value if not set
                    allowTaggedTemplates: false, // Default value if not set
                },
            ],
            'react/prop-types': 'off',
            'react/react-in-jsx-scope': 'off',
            'sort-keys': 'off',
            'spaced-comment': 'off',
            'no-console': 'off',
            'no-undef': 'off',
            'consistent-return': 'off',
            'func-names': 'off',
            'object-shorthand': 'off',
            'no-process-exit': 'off',
            'no-param-reassign': 'off',
            'no-return-await': 'off',
            'no-underscore-dangle': 'off',
            'class-methods-use-this': 'off',
            'no-constant-binary-expression': 'off',
            'react/no-unescaped-entities': 'off',
            'react/no-string-refs': 'off',
            '@typescript-eslint/no-explicit-any': 'off',
        },
    },
];
