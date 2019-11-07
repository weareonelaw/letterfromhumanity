require('dotenv').config()
const path = require('path')
const Dotenv = require('dotenv-webpack')
const withSass = require('@zeit/next-sass')
const debug = process.env.NODE_ENV !== "production";

module.exports = withSass({
  target: 'serverless',
  exportPathMap: function () {
    return {
      "/": { page: "/" }
    }
  },
  sassLoaderOptions: {
    includePaths: ["node_modules"]
  },
  cssModules: true,
  cssLoaderOptions: {
    importLoaders: 1,
    localIdentName: "[local]___[hash:base64:5]",
  },
  // assetPrefix: !debug ? '/letterfromhumanity/' : '',
  env: {
    BACKEND_URL: process.env.BACKEND_URL
  },
  webpack: (config, { dev }) => {
    config.plugins = config.plugins || []

    config.plugins = [
      ...config.plugins,

      // Read the .env file
      new Dotenv()
    ]
    // Perform customizations to webpack config
    // console.log('webpack');
    // console.log(config.module.rules, dev);
    config.module.rules = config.module.rules.map(rule => {
      if(rule.loader === 'babel-loader') {
        rule.options.cacheDirectory = false
      }
      return rule
    })
    // Important: return the modified config
    return config
  }/*,
  webpackDevMiddleware: (config) => {
    // Perform customizations to webpack dev middleware config
    // console.log('webpackDevMiddleware');
    // console.log(config);
    // Important: return the modified config
    return config
  }, */
})
