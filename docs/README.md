---
home: true
heroImage: /star-logo.png
actionText: 使用文档 →
actionLink: /components/toast
features:
- title: 交互为主
  details: 繁星组件库的组件以交互组件为主，把繁琐的交互代码进行了封装。
- title: 轻便灵活
  details: 每个组件有一个默认的界面，使用者可以通过入参传入具体的样式和内容。
- title: 加载方式
  details: 支持全局加载和按需加载。
footer: MIT Licensed | Copyright © 2019-present Evan You
---

### 安装

``` bash
npm i growth-stars-ui
```

### 使用

``` js
// 全局加载

import starsUI from 'growth-stars-ui';
import 'growth-stars-ui/lib/index.css';

Vue.use(starsUI);

// or 按需加载

import { Popup } from 'growth-stars-ui';

Vue.use(Popup);
```
