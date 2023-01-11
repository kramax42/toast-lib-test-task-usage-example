const TerserPlugin = require('terser-webpack-plugin');
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'production',
  performance: {
    hints: false,
    maxEntrypointSize: 512000,
    maxAssetSize: 512000,
  },
  optimization: {
    splitChunks: {
      minSize: 10000,
      maxSize: 250000,
    },
    minimize: true,
    minimizer: [new TerserPlugin()],
  },
});
