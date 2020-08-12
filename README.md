# Webpack HMR In Action

> 图解 Webpack 热更新原理

https://www.cnblogs.com/xgqfrms/p/13487959.html

## Hot Module Replacement, HMR

> 热更新

## webpack 4.x

```sh
# webpack-dev-server 内置了 webpack-dev-middleware
$ yarn add -D webpack webpack-cli webpack-dev-server

# webpack-dev-middleware & express
$ yarn add -D webpack webpack-cli express webpack-dev-middleware

```

```sh
# testing
$ yarn open

```

## loader

```sh
$ yarn add -D css-loader style-loader sass-loader node-sass

$ yarn add -D babel
$ yarn add -D eslint

```

## plugins

```sh
$ yarn add -D html-webpack-plugin clean-webpack-plugin copy-webpack-plugin
$ yarn add -D mini-css-extract-plugin

```

https://webpack.js.org/guides/output-management/#cleaning-up-the-dist-folder

https://webpack.docschina.org/plugins/mini-css-extract-plugin/

https://webpack.docschina.org/plugins/terser-webpack-plugin/


## Writing a Plugin

https://webpack.docschina.org/contribute/writing-a-plugin/
