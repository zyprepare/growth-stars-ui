<template>
  <div class="toast-wrapper" v-show="isShow">
    <div id="toast" class="toast" :class="customClass" :style="{ width: toastW, height: toastH }">
      <div class="toast-content" v-html="message"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Toast',
  props: {
    message: String,
    timeout: {
      type: Number,
      default: 1500
    },
    // toast宽度
    toastW: String,
    // toast高度
    toastH: String,
    customClass: {
      type: String,
      default: 'toast-default'
    }
  },
  data() {
    return {
      isShow: false
    };
  },
  methods: {
    hide() {
      this.isShow = false;
    },
    show() {
      this.isShow = true;
      clearTimeout(this.timer);
      this.timer = setTimeout(() => this.hide(), this.timeout);
    }
  }
};
</script>

<style lang="scss" scoped>
.toast-wrapper {
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  overflow: hidden;
  .toast {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 1em;
    background: rgba(0, 0, 0, 0.8);
    border-radius: 5px;
    overflow: hidden;
    animation: scaleIn 0.3s forwards;
    &-default {
      width: 50vw;
      height: 80px;
    }
    &-content {
      text-align: center;
      // line-height: 1.6;
      font-size: 12px;
      color: #fff;
    }
  }
}
</style>
