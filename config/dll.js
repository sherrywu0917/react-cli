const webpack = require('webpack');
const path = require('path');

//定义地址
const ROOT_PATH = path.resolve(__dirname, '..');
const APP_PATH = path.resolve(ROOT_PATH, 'src'); //__dirname 中的src目录，以此类推
const APP_FILE = path.resolve(APP_PATH, 'app'); //根目录文件app.jsx地址
const BUILD_PATH = path.resolve(ROOT_PATH, 'build/static'); //发布文件所存放的目录/pxq/dist/前面加/报错？

var isProduction = process.env.NODE_ENV == 'production';
var plugins = [
    new webpack.DllPlugin({
        path: './build/[name]-manifest.json',
        name: '[name]',
        context: ROOT_PATH
    })
];

if(isProduction) {
  plugins = plugins.concat([
      new webpack.DefinePlugin({
          'process.env': {
            NODE_ENV: JSON.stringify('production')
          }
      }),
      new webpack.optimize.UglifyJsPlugin({
          // sourceMap: false,
          output: {
            comments: false
          },
          compress: {
            warnings: false,
          }
      })
  ]);
}

module.exports = {
    entry: {
      vendor: [
            'babel-polyfill',
            "react",
            'react-dom',
            'react-router',
            'redux',
            'react-redux',
            'redux-thunk',
            'immutable'
      ]
    },
    output: {
        path: BUILD_PATH, //编译到当前目录
        filename: 'js/[name].js', //编译后的文件名字
        library: '[name]'
    },
    plugins: plugins
}