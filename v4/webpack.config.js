const path = require('path');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
  mode: 'development',
  entry: {
    one: './src/one.js',
    two: './src/two.js',
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'public'),
  },
  plugins: [
    new BundleAnalyzerPlugin(),
  ],
  optimization: {
    splitChunks: {
      chunks: "all",
      cacheGroups: {
        vendor: { //v2
          name: 'vendor',
          test: /[\\/]node_modules[\\/]/,
          chunks: 'initial',
          priority: -10
        },
        default: {
          name: 'commons',
          chunks: 'initial',
          minChunks: 2,
          priority: -20,
          reuseExistingChunk: true,
          enforce: true,
          minSize: 0,
        }
      }
    }
  }
}