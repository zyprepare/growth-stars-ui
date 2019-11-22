---
title: Popup
---

### 功能说明

弹窗组件，该组件只提供基础交互功能，没有具体UI界面，使用者需基于此组件封装具体的UI组件。

### 使用示例

``` js
<Popup ref="myPopup">
  <div class="my-popup-content">
    <div>自定义HTML</div>
    <button @click="closeMyPopup">关闭弹窗</button>
  </div>
</Popup>

methods: {
  openMyPopup() {
    this.$refs.myPopup.show();
  },
  closeMyPopup() {
    this.$refs.myPopup.hide();
  }
}
```

### 参数说明

| 字段 | 说明 | 类型 | 默认值 | 是否必选
|----- | ----- | ----- | ----- | -----
| isHideCloseBtn | 是否隐藏关闭按钮 | Boolean | false | 否
| closeHandler | 点击关闭按钮时的回调函数 | Function | 无 | 否
