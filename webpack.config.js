"use strict";

/**
 *
 * @author xgqfrms
 * @license MIT
 * @copyright xgqfrms
 * @created 2020-08-0
 * @modified
 *
 * @description
 * @difficulty Easy Medium Hard
 * @complexity O(n)
 * @augments
 * @example
 * @link
 * @solutions
 *
 */

const log = console.log;

const path = require('path');
// build-in plugins
const webpack = require('webpack')
// third-party plugins
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
// const CopyPlugin = require('copy-webpack-plugin');
// const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  mode: 'development',
  entry: {
    app: './src/index.js',
    // math: './src/math.js',
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    // dev-server path
    publicPath: '/',
  },
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist',
    hot: true,
  },
  plugins: [
    // clear dist
    new CleanWebpackPlugin({
      cleanStaleWebpackAssets: false,
    }),
    new HtmlWebpackPlugin({
      template: './src/index.html',
      title: 'Webpack HMR In Action',
    }),
    new webpack.HotModuleReplacementPlugin(),
    // TypeError: Class constructor HotModuleReplacementPlugin cannot be invoked without 'new'
  ],
};
