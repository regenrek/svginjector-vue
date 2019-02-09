module.exports = {
    root: true,
    env: {
        browser: true,
        node: true
    },
    parserOptions: {
        parser: 'babel-eslint'
    },
    extends: [
        'plugin:vue/recommended'
    ],
    // required to lint *.vue files
    plugins: [
        'vue',
    ],
    // add your custom rules here
    rules: {
        'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        "vue/require-default-prop": ["warn"],
        "no-unused-vars": ["warn"],
        "indent": "off",
        "spaced-comment": "off",
        "vue/attributes-order": "off",
        "vue/max-attributes-per-line": "off",
        "vue/html-self-closing": "off"
    }
}
