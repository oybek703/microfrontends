const {merge} = require('webpack-merge')
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin')
const commonConfig = require('./webpack.common')
const packageJson = require('../package.json')

const devConfig = {
  mode: 'development',
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
          'marketing': 'marketing@https://cdn.jsdelivr.net/gh/oybek703/microfrontends@master/marketing/dist/remoteEntry.js'
        },
        shared: packageJson.dependencies
      })
  ]
}

module.exports = merge(commonConfig, devConfig)