import path from 'path'
import webpack from 'webpack'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import CopyWebpackPlugin from 'copy-webpack-plugin'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'

import * as common from './webpack.common'

export const cache = true
export const devtool = ''
export const context = common.context
export const resolve = common.resolve
export const entry = {
  app: common.clientPath,
  vendor: common.entry.vendor
}

export const output = {
  path: common.buildPath,
  publicPath: '/',
  library: '[name]',
  filename: '[name].[hash].js',
  sourceMapFilename: '[name].map',
  chunkFilename: '[name].[hash].chunk.js'
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
      test: /\.(sa|sc|c)ss$/,
      exclude: /node_modules/,
      use: [
        MiniCssExtractPlugin.loader,
        {
          loader: 'css-loader',
          options: {
            modules: true,
            importLoaders: 1,
            localIdentName: '[hash:base64:4]'
          }
        },
        {
          loader: 'postcss-loader',
          options: {
            plugins: () => common.postcss.concat(
              require('postcss-clean')(),
              require('autoprefixer')()
            )
          }
        }
      ]
    }
  ])
}

export const optimization = {
  minimize: true,
  splitChunks: {
    cacheGroups: {
      commons: {
        test: /[\\/]node_modules[\\/]/,
        name: 'vendor',
        chunks: 'all'
      }
    }
  }
}

export const plugins = [
  new webpack.DefinePlugin({ 'process.env.NODE_ENV': JSON.stringify('production') }),
  new webpack.DllReferencePlugin({
    context: path.join(__dirname),
    manifest: require('../dist/dlls/vendor-manifest.json')
  }),
  new CopyWebpackPlugin([{ from: path.resolve(__dirname, '../src/app/assets'), to: common.assetsPath }]),
  new webpack.NoEmitOnErrorsPlugin(),
  new MiniCssExtractPlugin({ filename: 'styles.[contenthash].css', allChunks: true }),
  new HtmlWebpackPlugin({
    title: 'React base',
    inject: 'body',
    filename: 'index.html',
    minify: true,
    template: path.resolve(common.clientPath, 'index.html')
  })
].concat(common.plugins)
