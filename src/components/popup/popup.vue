<template>
  <div class="common-popup-wrapper" ref="popupWrapper" v-if="popupStatus">
    <i class="mask-bg" @touchmove.stop.prevent></i>
    <div class="common-popup-content">
      <slot></slot>
      <div class="common-popup-close" v-if="!isHideCloseBtn" @click.stop="hide">
        <i></i>
      </div>
    </div>
  </div>
</template>

<script>
import { modalHelper } from '../../utils/utils';

export default {
  name: 'Popup',
  props: {
    isHideCloseBtn: {
      type: Boolean,
      default: false
    },
    closeHandler: Function
  },
  data() {
    return {
      popupStatus: false
    };
  },
  watch: {
    popupStatus(val) {
      if (val) {
        modalHelper.afterOpen();
      } else {
        modalHelper.beforeClose();
      }
    }
  },
  methods: {
    show() {
      this.popupStatus = true;
    },
    hide() {
      this.popupStatus = false;
      this.closeHandler && this.closeHandler();
    }
  }
};
</script>

<style lang="scss" scoped>
.common-popup-wrapper,
.mask-bg {
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}
.mask-bg {
  position: absolute;
  background-color: #000;
  opacity: 0.6;
}
.common-popup-wrapper {
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  overflow: hidden;
  .common-popup-content {
    position: relative;
    animation: scale 0.3s;
    z-index: 1009;
    .common-popup-close {
      position: absolute;
      bottom: -50px;
      left: 50%;
      transform: translate(-50%, 0);
      i {
        display: inline-block;
        width: 25px;
        height: 25px;
        background: url(../../assets/close.png) no-repeat center;
        background-size: contain;
      }
    }
  }
}

@keyframes scale {
  0% {
    transform: scale(0.3);
  }
  100% {
    transform: scale(1);
  }
}
</style>
