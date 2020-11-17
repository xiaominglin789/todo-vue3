<template>
  <div class="com-topbar">
    <div class="topbar-menu" @click="tapMenu">
      <i class=" icon-menu"></i>
    </div>
    <div class="topbar-tool">
      <i @click="tapSearch" class="iconfont icon-search"></i>
      <i @click="tapNotice" class="iconfont icon-notice"></i>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'ComTopbar',
  setup(props, { emit }) {
    const tapMenu = () => {
      emit('on-menu')
    }
    const tapSearch = () => {
      emit('on-search')
    }
    const tapNotice = () => {
      emit('on-notice')
    }

    return {
      tapMenu,
      tapSearch,
      tapNotice,
    }
  },
})
</script>

<style lang="scss" scoped>
.com-topbar {
  width: 100%;
  height: 50px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0 6px;
  i {
    cursor: pointer;
  }
  .topbar-menu {
    width: 32px;
    i {
      position: relative;
      font-size: 20px;
      display: inline-block;
      display: flex;
      flex-direction: column;
      width: 24px;
      height: 24px;
      background: linear-gradient(#777, #777);
      background-size: 70% 2px;
      background-position: 50% 65%;
      background-repeat: no-repeat;
    }
    i::before {
      position: absolute;
      content: '';
      width: 100%;
      height: 100%;
      background: linear-gradient(#777, #777);
      background-size: 70% 2px;
      background-position: 50% 35%;
      background-repeat: no-repeat;
    }
  }
  .topbar-tool {
    width: 100px;
    display: flex;
    justify-content: space-around;
    i {
      color: #777;
      font-size: 24px;
      display: inline-block;
      padding: 6px;
    }
    i:hover {
      border-radius: 50%;
    }
  }
}
</style>
