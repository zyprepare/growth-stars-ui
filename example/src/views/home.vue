<template>
  <div class="example">
    <div class="example-item">
      <div class="example-button" @click="openToast">Toast</div>
    </div>
    <div class="example-item">
      <div class="example-button" @click="openLoading">Loading</div>
    </div>
    <div class="example-item">
      <div class="example-button" @click="openException">Exception</div>
    </div>
    <div class="example-item">
      <div class="example-button" @click="openMyPopup">Popup</div>
      <Popup ref="myPopup">
        <div class="my-popup-content">
          <div>自定义HTML</div>
          <button @click="closeMyPopup">关闭弹窗</button>
        </div>
      </Popup>
    </div>
    <div class="star-icon"><i></i><i></i><i></i></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isShowBanner: false,
      dataList: [
        '//m.360buyimg.com/mobilecms/s700x280_jfs/t1/99086/24/917/70241/5db6af2eE21280630/3cee42175808795c.jpg!cr_1125x445_0_171!q70.jpg.dpg',
        '//m.360buyimg.com/mobilecms/s700x280_jfs/t1/96076/33/615/111665/5db0fbbcE510023be/a924082c8547c04c.jpg!cr_1125x445_0_171!q70.jpg.dpg'
      ],
      slideDirection: 'left',
      pageNum: 1,
      isLoadingData: false,
      listData: [],
      isShowBroadCast: false,
      broadCastText:
        '这是小广播，小广播小广播小广播小广播小广播小广播小广播小广播小广播小广播小广播小广播小广播小广播哈',
      isShowPrice: false
    };
  },
  methods: {
    openToast() {
      this.$Toast.show({
        message: '<i class="success-icon"></i>这有一个提示信息<br />toast高度可以自定义',
        timeout: 3000,
        customClass: 'toast-class'
      });
    },
    openLoading() {
      this.$Loading.show();
      setTimeout(() => {
        this.$Loading.hide();
      }, 2000);
    },
    openException() {
      this.$Exception.show({
        refreshHandler() {
          window.location.reload();
        }
      });
    },
    openMyPopup() {
      this.$refs.myPopup.show();
    },
    closeMyPopup() {
      this.$refs.myPopup.hide();
    }
  }
};
</script>

<style lang="scss">
.example-item {
  .example-button {
    height: 50px;
    line-height: 50px;
    font-size: 20px;
    text-align: center;
    border-bottom: 1px solid #acc;
  }
  .banner_box {
    width: 350px;
    margin: 25px auto;
  }
}

.toast-class {
  width: 50vw;
  height: 120px;
  .success-icon {
    display: block;
    width: 43px;
    height: 43px;
    margin: 0 auto 1em;
    background: url(../assets/toast_success.png) no-repeat;
    background-size: contain;
  }
}

.my-popup-content {
  width: 200px;
  height: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  background: #fff;
}

.star-icon {
  position: relative;
  left: 100px;
  top: 100px;
  width: 200px;
  height: 200px;
  border-radius: 10px;
  background: #89c8e2;
  i {
    position: absolute;
    left: 25px;
    top: 74px;
    border: 0px solid transparent;
    border-top-color: #fbf4a2;
    border-top-width: 50px;
    border-left-width: 75px;
    border-right-width: 75px;
    &:nth-child(2) {
      transform: rotate(72deg);
    }
    &:nth-child(3) {
      transform: rotate(144deg);
    }
  }
}
</style>
