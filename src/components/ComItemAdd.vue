<template>
  <div class="com-item-add">
    <div class="close-btn" @click="onClose">
      <i class="iconfont icon-close"></i>
    </div>
    <!-- 输入栏 -->
    <div class="form">
      <input type="text" />
      <div class="form-tools">
        <span class="date">
          <i class="iconfont icon-date"></i>
          <span>Today</span>
        </span>
        <span class="my-checkbox"></span>
      </div>
      <div class="other-tools">
        <span>
          <i class="iconfont icon-file"></i>
        </span>
        <span>
          <i class="iconfont icon-flag"></i>
        </span>
        <span>
          <i class="iconfont icon-night"></i>
        </span>
      </div>
    </div>
    <!-- 添加按钮 -->
    <span class="add-btn" @click="onClose">
      <span>New task</span>
      <i class="iconfont icon-up"></i>
    </span>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'ComItemDetail',
  props: {
    show: Boolean,
  },
  setup(props, { emit }) {
    function onClose() {
      emit('on-close')
    }

    return {
      onClose,
    }
  },
})
</script>

<style lang="scss" scoped>
.com-item-add {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  width: 100vw;
  min-height: 100vh;
  background-color: #fff;
  display: flex;
  align-items: center;
  user-select: none;
  .close-btn {
    position: fixed;
    top: 36px;
    right: 40px;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    border: 1px solid rgb(204, 204, 204);
    display: flex;
    justify-content: center;
    align-items: center;
    i {
      font-size: 20px;
    }
  }
  .close-btn:active,
  .add-btn:active {
    transform: scale(1.04);
  }
  /** form */
  .form {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    input {
      outline: none;
      border: none;
      width: 80%;
      height: 40px;
      line-height: 40px;
      margin: 0 auto;
      border-bottom: 1px solid #999;
      border-top-left-radius: none;
      border-bottom-left-radius: none;
      border-bottom-right-radius: 24px;
      box-shadow: 5px 4px 6px 1px rgb(226, 226, 226);
      text-indent: 8px;
      color: #777;
      font-size: 18px;
    }
    .form-tools {
      display: flex;
      align-items: center;
      margin: 32px 36px 100px 36px;
      .date {
        box-sizing: border-box;
        display: inline-block;
        width: 120px;
        height: 48px;
        padding: 12px;
        border-radius: 40px;
        border: 1px solid rgb(198, 219, 219);
        display: flex;
        justify-content: center;
        align-items: center;
        i {
          width: 20px;
          height: 20px;
          font-size: 18px;
          margin-right: 4px;
        }
        span {
          font-size: 16px;
          text-overflow: ellipsis;
          white-space: nowrap;
          overflow: hidden;
        }
      }
      .my-checkbox {
        margin-left: 20px;
        display: inline-block;
        width: 24px;
        height: 24px;
        border-radius: 50%;
        border: 1px solid rgb(61, 58, 211);
        position: relative;
      }
      .my-checkbox::after {
        content: '';
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 60%;
        height: 60%;
        border-radius: 50%;
        background: rgb(61, 58, 211);
        box-shadow: 0 0 4px rgb(61, 58, 211);
      }
    }
    .other-tools {
      width: 100%;
      height: 48px;
      display: flex;
      justify-content: center;
      align-content: center;
      span {
        width: 36px;
        height: 36px;
        margin: 0 12px;
        i {
          font-size: 24px;
          color: #888;
        }
      }
    }
  }
  /** 添加按钮 */
  .add-btn {
    box-sizing: border-box;
    display: inline-block;
    position: fixed;
    right: 48px;
    bottom: 64px;
    width: 200px;
    height: 56px;
    line-height: 56px;
    text-align: center;
    background-color: rgb(31, 108, 209);
    color: #fff;
    border-radius: 40px;
    font-size: 16px;
    i {
      font-size: 16px;
      margin-left: 12px;
    }
  }
  /** 其他标签点击 */
  .date:active,
  .my-checkbox:active {
    transform: scale(1.02);
  }
}
</style>
