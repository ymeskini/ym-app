module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    'plugin:@typescript-eslint/recommended',
    'prettier/@typescript-eslint',
    // make sure that plugin:prettier/recommended is the last configuration in the extends array
    'plugin:prettier/recommended',
  ],
};
