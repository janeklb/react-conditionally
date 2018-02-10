import babel from 'rollup-plugin-babel'
import commonjs from 'rollup-plugin-commonjs'
import resolve from 'rollup-plugin-node-resolve'

import pkg from './package.json'

const external = ['react', 'react-dom'];

export default [{
  input: 'src/index.js',
  output: { file: pkg.main, format: 'cjs' },
  external,
  plugins: [
    babel({
      exclude: 'node_modules/**'
    }),
    resolve(),
    commonjs()
  ]
}, {
  input: 'src/index.js',
  output: { file: pkg.module, format: 'es' },
  external,
  plugins: [
    resolve(),
    commonjs()
  ]
}];
