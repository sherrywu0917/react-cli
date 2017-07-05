const webpackMerge = require('webpack-merge');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const baseConfig = require('./base.js');

module.exports = webpackMerge(baseConfig, {
    devtool: 'cheap-module-eval-source-map',
    // plugins: [new BundleAnalyzerPlugin()]
});