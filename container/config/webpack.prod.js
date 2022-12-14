const {merge} = require('webpack-merge')
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin')
const commonConfig = require('./webpack.common')
const packageJson = require('../package.json')

const domain = process.env.PRODUCTION_DOMAIN

const devConfig = {
  mode: 'production',
  output: {
    filename: '[name].[contenthash].js'
  },
  plugins: [
      new ModuleFederationPlugin({
        name: 'container',
        remotes: {
          'marketing': `marketing@${domain}/marketing/dist/remoteEntry.js`,
          'auth': `auth@${domain}/auth/dist/remoteEntry.js`
        },
        shared: packageJson.dependencies
      })
  ]
}

module.exports = merge(commonConfig, devConfig)