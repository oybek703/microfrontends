const {merge} = require('webpack-merge')
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin')
const commonConfig = require('./webpack.common')
const packageJson = require('../package.json')

const domain = 'http://oybek703.github.io/microfrontends'
// const domain = process.env.PRODUCTION_DOMAIN

const devConfig = {
  mode: 'production',
  output: {
    filename: '[name].[contenthash].js'
  },
  devServer: {
    port: 8080,
    historyApiFallback: {
      index: 'index.html'
    }
  },
  plugins: [
      new ModuleFederationPlugin({
        name: 'container',
        remotes: {
          'marketing': `marketing@${domain}/marketing/remoteEntry.js`
        },
        shared: packageJson.dependencies
      })
  ]
}

module.exports = merge(commonConfig, devConfig)