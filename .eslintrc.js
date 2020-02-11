module.exports = {
  env: {
    es6: true,
    node: true,
    jest: true
  },
  extends: [
    'standard'
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly'
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module'
  },
  rules: {
    'array-bracket-newline': [
      'error',
      {
        multiline: true,
        minItems: 4
      }
    ],
    'object-curly-newline': [
      'error',
      {
        ObjectExpression: {
          multiline: true,
          minProperties: 2
        },
        ObjectPattern: {
          multiline: true,
          minProperties: 10
        },
        ImportDeclaration: {
          multiline: true,
          minProperties: 4
        },
        ExportDeclaration: {
          multiline: true,
          minProperties: 4
        }
      }
    ],
    'max-len': [
      'error',
      {
        code: 120
      }
    ]
  }
}
