const path = require('path');
const webpack = require('webpack');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
  entry: {
    vendor: [
      'ramda',
    ],
    one: './src/one.js',
    two: './src/two.js',
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'public'),
  },
  plugins: [
    new BundleAnalyzerPlugin(),
    new webpack.optimize.CommonsChunkPlugin({
      names: ['commons', 'vendor'],
      minChunks: 2,
    }),
  ],
}