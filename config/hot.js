const path = require('path');
const webpack = require('webpack');
const webpackMerge = require('webpack-merge');

//定义地址
const ROOT_PATH = path.resolve(__dirname, '..');
const APP_PATH = path.resolve(ROOT_PATH, 'src'); //__dirname 中的src目录，以此类推
const APP_FILE = path.resolve(APP_PATH, 'app'); //根目录文件app.jsx地址
const BUILD_PATH = path.resolve(ROOT_PATH, 'build/static'); //发布文件所存放的目录/pxq/dist/前面加/报错？

const baseConfig = require('./base.js');

module.exports = webpackMerge(baseConfig, {
    entry: {
        app: [
            'webpack-hot-middleware/client',
            'babel-polyfill',
            APP_FILE
        ]
    },
    devtool: 'cheap-module-eval-source-map',
    plugins: [
        new webpack.DefinePlugin({
            //process.argv：当前进程的命令行参数数组。
            //process.env：指向当前shell的环境变量，比如process.env.HOME。
            'process.env': {
                NODE_ENV: JSON.stringify('development') //定义编译环境
            }
        }),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ]
});
