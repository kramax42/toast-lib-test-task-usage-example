const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'source-map',
  performance: {
    hints: false,
  },
  devServer: {
    port: 8090,
    hot: true,
    historyApiFallback: true,
  },
});
