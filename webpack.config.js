const path = require('path');
const NodeExternals = require('webpack-node-externals');
const NodemonPlugin = require('nodemon-webpack-plugin');
const Dotenv = require('dotenv-webpack');
const NodePolyfillPlugin = require("node-polyfill-webpack-plugin")

module.exports = {
  entry: ['@babel/polyfill', './src/server/www.ts'],
  output: {
    filename: 'build.js',
    path: path.resolve(__dirname,'dist')
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  externals:[NodeExternals()],
  module: {
    rules:[
      {
        test: /\.ts?$/,
        loader: 'ts-loader'
      },
      {
        test: /\.js?$/,
        loader: 'babel-loader'
      }
    ]
  },
  plugins: [
    new NodemonPlugin({
      script: './dist/build.js',
      watch: path.resolve('./dist'),
    }),
    new Dotenv(),
    new NodePolyfillPlugin()
  ]
}