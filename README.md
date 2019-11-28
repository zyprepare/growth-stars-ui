<a href="https://zyprepare.github.io/growth-stars-ui/">繁星组件库</a>
====
基于vue的移动端组件库，主要对组件交互进行了封装，提供默认样式和内容，使用者可以灵活自行传入具体内容和样式，支持全局和按需加载。

### 安装

``` bash
npm i growth-stars-ui
```

### 使用

``` js
// 全局加载

import StarsUI from 'growth-stars-ui';
import 'growth-stars-ui/lib/index.css';

// 注册所有组件
Vue.use(StarsUI);
// or 注册全局组件
Vue.use(StarsUI.gobal);
// or 注册全局普通组件
Vue.use(StarsUI.local);

// 按需加载

import { Popup } from 'growth-stars-ui';

Vue.component('Popup', Popup);

// or
export default {
  components: {
    Popup
  }
}
```


