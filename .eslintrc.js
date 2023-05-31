module.exports = {
	env: {
		browser: true,
		es2021: true,
	},
	extends: [
		'prettier',
		'plugin:react/recommended',
		'airbnb',
		'eslint:recommended',
		'plugin:prettier/recommended',
		'eslint-config-prettier',
	],
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: 12,
		sourceType: 'module',
	},
	plugins: ['react', 'only-warn', 'prettier'],
	rules: {
		'import/no-unresolved': 'off',
		camelcase: 'off',
		'import/prefer-default-export': 'off',
		'no-param-reassign': 'off',
		'no-case-declarations': 'off',
		'import/no-extraneous-dependencies': [
			'error',
			{ devDependencies: true },
		],
		'max-len': ['error', { code: 120 }],
		'no-use-before-define': ['error', { functions: false }],
		'react/jsx-props-no-spreading': 'off',
		'react/require-default-props': 'off',
		'no-plusplus': 'off',
		'no-underscore-dangle': 'off',
		'no-shadow': 'off',
		'prettier/prettier': [
			'error',
			{
				singleQuote: true,
				tabWidth: 4,
				endOfLine: 'auto',
			},
		],
	},
};
