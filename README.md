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
- [ ] fetch package
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


#### CSS Module
>Naming [css-modules naming](https://github.com/css-modules/css-modules#naming)

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