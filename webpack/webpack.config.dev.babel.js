import webpack from 'webpack'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import path from 'path'
import CopyWebpackPlugin from 'copy-webpack-plugin'

import * as common from './webpack.common'

export const cache = true
export const devtool = 'cheap-module-eval-source-map'
export const context = common.context
export const resolve = common.resolve

export const entry = {
  app: common.clientPath
}

export const devServer = {
  contentBase: common.basePath,
  compress: true,
  port: 9000,
  historyApiFallback: true,
  hot: true
}

export const output = {
  path: common.buildPath,
  publicPath: '/',
  library: '[name]',
  filename: '[name].js',
  sourceMapFilename: '[name].map',
  chunkFilename: '[name].chunk.js'
}

export const module = {
  rules: common.module.rules.concat([
    {
      test: /\.(js|jsx)$/,
      include: /src/,
      exclude: [/node_modules/, /dist/, /server/],
      use: ['babel-loader']
    },
    {
      test: /\.css$/,
      exclude: /node_modules/,
      use: [
        {
          loader: 'style-loader'
        },
        {
          loader: 'css-loader',
          options: {
            modules: true,
            importLoaders: 1,
            localIdentName: '[local]-[hash:base64:4]'
          }
        },
        {
          loader: 'postcss-loader',
          options: {
            plugins: () => common.postcss
          }
        }
      ]
    }
  ])
}

export const plugins = [
  new webpack.DefinePlugin({ 'process.env.NODE_ENV': JSON.stringify('development') }),
  new webpack.HotModuleReplacementPlugin(),
  new webpack.DllReferencePlugin({
    context: common.buildPath,
    manifest: require('../dist/dlls/vendor-manifest.json')
  }),
  new CopyWebpackPlugin([{ from: path.resolve(__dirname, '../src/app/assets'), to: common.assetsPath }]),
  new HtmlWebpackPlugin({
    title: 'React base',
    inject: 'body',
    filename: 'index.html',
    template: path.resolve(common.clientPath, 'index.html')
  })
]
  .concat(common.plugins)
