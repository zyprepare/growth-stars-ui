---
title: Exception
---

### 功能说明

异常兜底页面组件。

### 使用示例

``` js
this.$Exception.show();

this.$Exception.show({
  refreshHandler() {
    window.location.reload();
  }
});
```

### 参数说明

| 字段 | 说明 | 类型 | 默认值 | 是否必选
|----- | ----- | ----- | ----- | -----
| refreshHandler | 刷新回调函数 | Function | () => { window.location.reload(); } | 否
