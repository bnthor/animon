import babel from '@rollup/plugin-babel';
import eslint from '@rollup/plugin-eslint';
import {terser} from 'rollup-plugin-terser';

export default [{
  input: 'src/animon.js',
  output: [
    {
      file: 'dist/animon.cjs.js',
      format: 'cjs'
    },
    {
      file: 'dist/animon.js',
      format: 'es'
    },
    {
      file: 'dist/animon.iife.js',
      format: 'iife',
      name: 'Animon'
    }
  ],
  plugins: [,
    eslint({
      fix: true,
      exclude: ['./node_modules/**', './src/*.pcss'],
    }),
    babel({
      exclude: 'node_modules/**',
      extensions: ['.js'],
      babelHelpers: 'bundled',
    }),
    terser()
  ],
}]
