/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable @typescript-eslint/no-empty-function */
const path = require('path')
const withSass = require('@zeit/next-sass')
const withLess = require('@zeit/next-less')
const withCSS = require('@zeit/next-css')
const compose = require('next-compose-plugins')
const withReactSvg = require('next-react-svg')

const isProd = process.env.NODE_ENV === 'production'

// fix: prevents error when .less files are required by node
if (typeof require !== 'undefined') {
  require.extensions['.less'] = (file) => {}
}

const cssConfig = withCSS({
  cssModules: true,
  cssLoaderOptions: {
    importLoaders: 1,
    localIdentName: '[local]___[hash:base64:5]',
  },
  ...withLess(
    withSass({
      lessLoaderOptions: {
        javascriptEnabled: true,
      },
    })
  ),
})

const sassConfig = withSass({
  lessLoaderOptions: {
    javascriptEnabled: true,
  },
})

module.exports = compose([sassConfig, withLess], {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      issuer: {
        test: /\.(js|ts)x?$/,
      },
      use: ['@svgr/webpack'],
    })

    return config
  },
})
