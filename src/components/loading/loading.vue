<template>
  <div class="mask loading" v-show="isShowLoading" @touchmove="maskTouchMove">
    <div class="content">
      <div class="loading-in">
        <span class="loading-in-hd">
          <i class="load-circel"></i>
          <i class="load-logo"></i>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Loading',
  data() {
    return {
      isShowLoading: false
    };
  },
  methods: {
    maskTouchMove(evt) {
      evt.preventDefault();
    },
    show() {
      this.isShowLoading = true;
    },
    hide() {
      this.isShowLoading = false;
    }
  }
};
</script>

<style lang="scss" scoped>
.mask {
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 999;
  background: rgba(0, 0, 0, 0.2);
  overflow: hidden;
  &.loading {
    z-index: 1000;
    background: rgba(0, 0, 0, 0.6);
    .content {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      width: 50px;
      height: 50px;
      border-radius: 5px;
      background: #fff;
      color: #fff;
      .loading-in {
        position: relative;
        text-align: center;
        z-index: 999;
        line-height: 1;
        font-size: 0;
        display: inline-block;
        width: 20px;
        height: 20px;
      }
      .loading-in-hd {
        position: relative;
        display: inline-block;
        width: 100%;
        height: 100%;
      }
      .load-circel {
        width: 100%;
        height: 100%;
        display: block;
        background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAsBAMAAADsqkcyAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAASUExURQAAAJmZmZmZmZmZmZmZmZmZmftNTfUAAAAGdFJOUwAd1kJpi0iiYQ8AAAD+SURBVCjPlZLLmoMgDIWT0u617QOMmXYvXvZecD915P1fZUCtCkkXw8IP/u9wOIkBWBbWRMCWIhLwmejZpzFFote6wwPuqNkl2+5C2UGzeY2PwHET58FLq7z7jgIkS4wmCjbLT884b+rlRcbK8Jh5AKa+G7xDDl8eAk7gmnHszIsvAWvoGhGPuYgp4RjKjxj+hWWTUcBYygHLT+UUP8KMaTgJrVI5nIXG3nJQluPKpbMsCvbuU7/Y/LZ+qCbm4e9j7KLMXHj9G+J7u1iFcjTrcQjkVf82s+3Rebtb7zbK7BIcrF7LNubQfzXYXieYVgGd9dZOdjLxv7oZB/X79AeNZB7NdvTHegAAAABJRU5ErkJggg==);
        background-repeat: no-repeat;
        background-size: contain;
        -webkit-animation: roll 0.8s linear infinite;
        animation: roll 0.8s linear infinite;
      }
      .load-logo {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate3d(-50%, -50%, 0);
        z-index: 10;
        display: block;
        width: 53%;
        height: 35%;
        background-repeat: no-repeat;
        background-size: contain;
      }
      .load-text {
        color: #838689;
        font-size: 0.44rem;
        display: block;
        padding-top: 0.4rem;
      }
      @-webkit-keyframes roll {
        0% {
          -webkit-transform: rotate(0deg);
        }

        100% {
          -webkit-transform: rotate(360deg);
        }
      }
      @keyframes roll {
        0% {
          transform: rotate(0deg);
        }

        100% {
          transform: rotate(360deg);
        }
      }
    }
  }
}
</style>
