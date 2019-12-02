---
title: 开始使用
---

### 简介
繁星组件封装的组件主要以交互为主，对外暴露传入样式的接口。

### 安装组件库
``` bash
npm i -D growth-stars-ui
```

### 全局加载
``` js
import StarsUI from 'growth-stars-ui';
import 'growth-stars-ui/lib/index.css';

// 注册所有组件
Vue.use(StarsUI);
// or 注册全局组件
Vue.use(StarsUI.gobal);
// or 注册全局普通组件
Vue.use(StarsUI.local);
```

### 按需加载
安装插件 babel-plugin-import
``` bash
npm i -D babel-plugin-import
```

.babelrc文件配置
``` js
{
  "plugins": [
    [
      "import",
      {
        "libraryName": "growth-stars-ui",
        "libraryDirectory": "src/components"
      }
    ]
  ]
}

```

代码中使用（注意：使用按需加载的方式后不能在使用全局加载）
``` js
import { Toast, Popup } from 'growth-stars-ui';

Vue.prototype.$Toast = Toast;
Vue.component('Popup', Popup);

// or 局部注册
export default {
  components: {
    Popup
  }
}
```
