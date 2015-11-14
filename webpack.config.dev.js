'use strict';
var path       = require('path');
var webpack    = require('webpack');
var HtmlPlugin = require('html-webpack-plugin');


var config = Object.create(require('./webpack.config.base'));

config.entry = [
  'webpack-dev-server/client?http://localhost:8000',
  'webpack/hot/dev-server',
  './src/bootstrap.jsx'
];

config.devServer = {
  info: false,
  hot: true,
  inline: false,
  port: 8000,
  host: 'localhost',
  colors: true,
  progress: true,
  contentBase: 'build',
  historyApiFallback: true,
  stats: {
    colors: true,
    progress: true
  }
};

config.plugins = [
  new webpack.optimize.OccurenceOrderPlugin(),
  new webpack.DefinePlugin({
    'process.env': {
      'NODE_ENV': JSON.stringify('production')
    },
    '__DEV__': JSON.stringify(JSON.parse(process.env.BUILD_DEV || 'true')),
    '__DEVTOOLS__': false
  }),
  new HtmlPlugin({
    pkg      : require('./package.json'),
    template : './src/index.html'
  }),
  new webpack.HotModuleReplacementPlugin(),
  new webpack.NoErrorsPlugin()
];

module.exports = config;
