const { babel } = require('@rollup/plugin-babel');

module.exports = {
  input: 'js/index.js',
  output: {
    name: 'mellow',
    file: 'dist/js/mellow.js',
    format: 'umd',
    generatedCode: 'es2015'
  },
  plugins: [
    babel({
      exclude: 'node_modules/**',
      babelHelpers: 'bundled'
    })
  ]
};
