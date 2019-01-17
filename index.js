module.exports = {
  extends: ['airbnb-base', 'plugin:vue/recommended'],
  plugins: ['html', 'jsdoc'],
  env: {
    browser: true,
    node: true
  },
  rules: {
    // General rules.
    'import/no-extraneous-dependencies': ['warn', {
      'devDependencies': true,
    }],
    'no-new': ['off'],
    'complexity': ['warn', 20],
    'curly': ['warn', 'all'],
    'dot-location': ['warn', 'property'],
    'dot-notation': 'warn',
    'eqeqeq': ['warn', 'always'],
    'no-multi-spaces': 'warn',
    'array-bracket-spacing': ['error', 'never'],
    'block-spacing': ['error', 'always'],
    'brace-style': ['error', '1tbs'],
    'camelcase': ['warn', {'properties': 'always'}],
    'comma-spacing': ['warn', {'after': true}],
    'comma-style': ['warn', 'last'],
    'computed-property-spacing': ['warn', 'never'],
    'consistent-this': ['error', 'self'],
    'func-call-spacing': ['error', 'never'],
    'keyword-spacing': ['warn', {'after': true}],
    'max-depth': ['warn', {'max': 4}],
    'max-len': ['warn', {
      'code': 110,
      'ignoreTrailingComments': true,
      'ignoreUrls': true,
    }],
    'max-nested-callbacks': ['warn', {'max': 5}],
    'no-multiple-empty-lines': ['warn', {'max': 2}],
    'no-trailing-spaces': ['error', {'skipBlankLines': false}],
    'no-unneeded-ternary': ['warn', {'defaultAssignment': true}],
    'no-whitespace-before-property': 'error',
    'object-curly-spacing': ['warn', 'never'],
    'object-curly-newline': ['warn', {'consistent':true, 'multiline': true}],
    'require-jsdoc': ['error', {
      'require': {
        'FunctionDeclaration': true,
        'MethodDefinition': true,
        'ClassDeclaration': true,
      },
    }],
    'spaced-comment': ['error', 'always', {
      'line': {
        'markers': ['/'],
        'exceptions': ['-', '+'],
      },
      'block': {
        'markers': ['!'],
        'exceptions': ['*'],
        'balanced': true,
      }
    }],
    'semi-spacing': ['error', {'before': false, 'after': true}],
    'space-before-function-paren': ['error', 'never'],
    'space-in-parens': ['error', 'never'],
    'no-param-reassign': 0,
    'jsdoc/check-param-names': 1,
    'jsdoc/check-tag-names': 1,
    'jsdoc/newline-after-description': ['warn', 'never'],
    'jsdoc/require-description-complete-sentence': 1,
    'jsdoc/require-param': 1,
    'jsdoc/require-param-type': 1,
    'jsdoc/require-returns-type': 1,
    'no-underscore-dangle': 0,
    'comma-dangle': ['error', {
      'arrays': 'always-multiline',
      'objects': 'always-multiline',
      'imports': 'always-multiline',
      'exports': 'always-multiline',
      'functions': 'never',
    }],
    'arrow-body-style': 0,
    'prefer-promise-reject-errors': ['off'],

    // Vue rules.
    'vue/max-attributes-per-line': ['error', {
      'singleline': 4,
      'multiline': 1,
    }],
    'vue/singleline-html-element-content-newline': false,
    'vue/html-self-closing': ['warning', {
      'html': {
        'void': 'never',
        'normal': 'never',
        'component': 'always',
      },
      'svg': 'always',
      'math': 'always',
    }],
  },
  settings: {
    jsdoc: {
      tagNamePreference: {
        returns: 'return',
      },
    },
  },
};
