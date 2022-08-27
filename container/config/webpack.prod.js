const {merge} = require('webpack-merge')
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin')
const commonConfig = require('./webpack.common')
const packageJson = require('../package.json')

const domain = 'https://raw.githubusercontent.com/oybek703/microfrontends/master/marketing/dist'
// const domain = process.env.PRODUCTION_DOMAIN

const devConfig = {
  mode: 'production',
  output: {
    filename: '[name].[contenthash].js'
  },
  plugins: [
      new ModuleFederationPlugin({
        name: 'container',
        remotes: {
          'marketing': `marketing@${domain}/remoteEntry.js`
        },
        shared: packageJson.dependencies
      })
  ]
}

module.exports = merge(commonConfig, devConfig)