# 基于React 脚手架的定制
基于react+es6+redux+router

## webpack Feature

   - 可以解析JSX语法
   - 可以解析ES6语法新特性
   - 支持LESS、SCSS预处理器
   - 编译完成自动打开浏览器
   - 单独分离CSS样式文件
   - 支持文件MD5戳，解决文件缓存问题
   - 支持图片、图标字体等资源的编译
   - 支持浏览器源码调试
   - 实现组件级热更新
   - 实现代码的热替换，浏览器实时刷新查看效果
   - 区分开发环境和生产环境
   - 分离业务功能代码和公共依赖代码  
   
    
##  目录结构
```
  z-react-cli
  |-- index.html // 启动页(主页)
  |-- build //构建目录，遵循发布系统规范
  |    |-- index.html   //静态页面
  |    |-- static       //资源文件发布到cdn,或发布到服务器  
  |
  |-- config //webpack编译
  |    |-- base.js //基础编译配置
  |    |-- dev.js  //开发环境编译配置
  |    |-- dll.js  //动态链接库编译配置
  |    |-- hot.js  //热替换编译配置
  |    |-- prod.js //开发环境编译配置
  |
  |-- src                     //源码目录
  |    |--component           // 组件
  |    |      |-- common      //公共组件
  |    |      |-- temp        //父组件
  |    |--Config              //工具方法
  |    |--Image               //图片资源
  |    |--Redux               // react-redux 数据状态管理
  |    |      |-- action.jsx  // 派发数据的 action
  |    |      |-- reducer.jsx //用于处理 action 的 reducer
  |    |      |-- store.jsx   //数据管理器
  |    |-- Router           //路由
  |    |-- Style            //样式
  |    |-- template         //编译html模板
  |    |-- App.jsx          //js 入口文件
  |-- static                // 源码静态资源(公共资源)
  |
  |-- mock.json      // mock数据

```

## 前端项目构建

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run hot

# build for production with test
npm run dll:dev
npm run build:dev

# build for production with online
npm run dll:prod
npm run build:prod
```


## 项目架构

   - 本项目采用 React 框架 , react-redux做数据状态管理,react-router做路由转发
   - 用 webpack 编译打包项目,实现生产,预发,线上不同环境下的调试开发
