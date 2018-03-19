const path = require('path');
const buble = require('rollup-plugin-buble');
const vue = require('rollup-plugin-vue');
const cjs = require('rollup-plugin-commonjs');
const node = require('rollup-plugin-node-resolve');
const replace = require('rollup-plugin-replace');
const version = process.env.VERSION || require('../package.json').version;
const banner =
`/*!
  * vuejs-slider-component v${version}
  * (c) ${new Date().getFullYear()} Andrej Adamcik
  * @license MIT
  */`;

const resolve = _path => path.resolve(__dirname, '../', _path);

module.exports = [
  // browser dev
  {
    file: resolve('dist/vuejs-slider-component.js'),
    format: 'umd',
    env: 'development'
  },
  {
    file: resolve('dist/vuejs-slider-component.min.js'),
    format: 'umd',
    env: 'production'
  },
  {
    file: resolve('dist/vuejs-slider-component.common.js'),
    format: 'cjs'
  },
  {
    file: resolve('dist/vuejs-slider-component.esm.js'),
    format: 'es'
  }
].map(genConfig);

function genConfig (opts) {
  const config = {
    input: {
      input: resolve('src/vue2-slider.vue'),
      plugins: [
        node(),
        cjs(),
        replace({
          __VERSION__: version
        }),
        vue({
          compileTemplate: true,
          css: 'dist/bundle.css'
        }),
        buble()
      ]
    },
    output: {
      file: opts.file,
      format: opts.format,
      banner,
      name: 'VueSliderComponent'
    }
  }

  if (opts.env) {
    config.input.plugins.unshift(replace({
      'process.env.NODE_ENV': JSON.stringify(opts.env)
    }))
  }

  return config
}
