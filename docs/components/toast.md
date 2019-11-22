---
title: Toast
---

### 功能说明

toast提示组件。

### 使用示例

``` js
this.$Toast.show({
  message: '错误提示信息'
});

this.$Toast.show({
  message: '<i class="success-icon"></i>这有一个提示信息<br />toast高度可以自定义',
  timeout: 3000,
  customClass: 'toast-class'
});
```

### 参数说明

| 字段 | 说明 | 类型 | 默认值 | 是否必选
|----- | ----- | ----- | ----- | -----
| message | toast显示内容，html字符串 | String | 无 | 否
| timeout | 消失时长，单位：毫秒 | Number | 1500 | 否
| toastW | toast宽度 | Number | 无 | 否
| toastH | toast高度 | Number | 无 | 否
| customClass | 自定义样式，类名 | String | toast-default | 否
