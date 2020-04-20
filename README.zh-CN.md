[English](./README.md) | 简体中文

# React Template

### 使用的包

- react
- react-router v5
- redux
- react-redux
- connected-react-router
- antd
- prop-types


### TODO
- [x] antd ui
- [x] 自定义主题
- [x] react-router
- [x] react-redux
- [x] admin布局
- [x] 侧导航支持嵌套
- [x] create-rtpl ([create-rtpl](https://github.com/kingzez/create-rtpl) 模板安装器)
- [x] typescript 版本优先
- [x] pipeline 流水线
- [x] redux-saga (副作用)
- [x] fetch package (使用 axios)
- [ ] permission 权限
- [ ] 支持多api
- [ ] 单点登录
- [ ] graphql
- [ ] redux-logger


### 用法

安装依赖
```shell
npm i
```

开发
```shell
npm start
```

打包构建
```shell
npm run build
```

构建分析
```shell
npm run analyze
```

静态服务，需要先打包构建
```shell
npm run serve
```


#### [CSS Modules](https://github.com/css-modules/css-modules)
> [命名](https://github.com/css-modules/css-modules#naming)
> [了解更多](https://css-tricks.com/css-modules-part-1-need/)

**Button.module.css**

```css
.error {
  background-color: red;
}
```

**another-stylesheet.css**

```css
.error {
  color: red;
}
```

**Button.js**

```js
import React, { Component } from 'react';
import styles from './Button.module.css'; // 作为模块导入
import './another-stylesheet.css'; // 普通的导入
class Button extends Component {
  render() {
    // 作为 js 的对象引用
    return <button className={styles.error}>Error Button</button>;
  }
}
```