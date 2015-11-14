var path = require('path');
var webpack = require('webpack');

var root = path.join(
    '..', 'bin', 'custom', 'merchandise', 'merchandisestorefront',
    'web', 'webroot', '_ui', 'desktop', 'common', 'js', 'custom'
);

var config = Object.create(require('./webpack.config.base'));

// TODO segregate into multi-entries on multiple addons.
// - plugins: common chunks.
config.devtool = 'source-map';

config.entry = './src/index.jsx';

config.externals = {
  react: 'React',
  moment: 'moment'
};

config.output = {
  path: root,
  filename: 'storefront.min.js'
};

config.plugins = [
  new webpack.optimize.OccurenceOrderPlugin(),
  new webpack.NoErrorsPlugin(),
  new webpack.DefinePlugin({
    'process.env': {
      'NODE_ENV': JSON.stringify('production')
    },
    '__DEV__': JSON.stringify(JSON.parse(process.env.BUILD_DEV || 'true')),
    '__DEVTOOLS__': false
  }),
  new webpack.optimize.UglifyJsPlugin({
    compressor: {
      warnings: false
    }
  })
];

module.exports = config;
