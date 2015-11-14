'use strict';
var path    = require('path');
var webpack = require('webpack');

var config = {};

config.module = {
  loaders: [
    {
      test: /\.(svg|ico|eot|ttf|woff2?|pdf|png)$/,
      loader: 'file?name=[path][name].[ext]&context=assets'
    },
    {
      test: /\.css$/,
      loader: 'style!css!autoprefixer'
    },
    {
      test: /.scss$/,
      loader: 'style!css!autoprefixer!sass'
    },
    {
      test: /\.jsx?$/,
      exclude: /(node_modules|bower_components)/,
      loader: 'babel-loader',
      query: {
        presets: ['react', 'es2015']
      }
    }
  ]
};

config.resolve = {
  root: [
    path.join(__dirname, 'node_modules')
  ],
  extensions: ['', '.js', '.jsx'],
  modulesDirectories: ['node_modules']
};


module.exports = config;
