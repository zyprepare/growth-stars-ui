<template>
  <div class="exception-page" v-if="isShow">
    <div class="exception-content">
      <img src="../../assets/exception.png" class="exception-img" />
      <div class="exception-text" @click.stop="refresh">
        <span>刷新页面 </span><i class="icon-refresh"></i>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Exception',
  props: {
    refreshHandler: {
      type: Function,
      default: () => {
        window.location.reload();
      }
    }
  },
  data() {
    return {
      isShow: false
    };
  },
  methods: {
    show() {
      this.isShow = true;
    },
    hide() {
      this.isShow = false;
    },
    refresh() {
      this.refreshHandler();
    }
  }
};
</script>

<style lang="scss" scoped>
.exception-page {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  // justify-content: center;
  align-items: center;
  padding-top: 115px;
  background: #dedede;
  z-index: 99999;
  .exception-img {
    width: 164px;
    height: 143px;
  }
  .icon-refresh {
    display: inline-block;
    width: 11px;
    height: 12px;
    background: url(../../assets/refresh.png) no-repeat center;
    background-size: contain;
  }
  .exception-text {
    margin-top: 6px;
    font-size: 13px;
    color: #999;
    text-align: center;
    span,
    i {
      vertical-align: middle;
    }
  }
}
</style>
