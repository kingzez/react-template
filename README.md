English | [简体中文](./README.zh-CN.md)

# React Template

### Use Package

- react
- react-router v5
- redux
- react-redux
- connected-react-router
- antd
- prop-types


### TODO
- [x] antd ui
- [x] custom theme
- [x] react-router
- [x] react-redux
- [x] admin layout
- [x] sidebar support nest
- [x] create-rtpl ([create-rtpl](https://github.com/kingzez/create-rtpl) template installer)
- [x] typescript version priority
- [x] pipeline
- [x] redux-saga (side effect model)
- [x] fetch package (use axios)
- [ ] permission
- [ ] multi api
- [ ] sso
- [ ] graphql
- [ ] redux-logger


### Usage

install dependency
```shell
npm i
```

dev
```shell
npm start
```

build
```shell
npm run build
```

analyze build
```shell
npm run analyze
```

serve static, need build first
```shell
npm run serve
```


#### [CSS Modules](https://github.com/css-modules/css-modules)
> [Naming](https://github.com/css-modules/css-modules#naming)
> [Learn more](https://css-tricks.com/css-modules-part-1-need/)

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
import styles from './Button.module.css'; // Import css modules stylesheet as styles
import './another-stylesheet.css'; // Import regular stylesheet
class Button extends Component {
  render() {
    // reference as a js object
    return <button className={styles.error}>Error Button</button>;
  }
}
```

`typescript-plugin-css-modules` vscode can intelligence