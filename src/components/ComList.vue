<template>
  <div class="com-list">
    <!-- title -->
    <h3>TODAY'S TASKS</h3>
    <!-- comtent -->
    <ul>
      <li v-for="(item, index) in tasks" :key="index">
        <com-list-item :model="item"></com-list-item>
      </li>
    </ul>
    <!-- tool -->
    <div class="add-btn" @click="onShowDetail">
      <i class="iconfont icon-close"></i>
      <!-- <div class="mask"></div> -->
    </div>
    <!-- add panel -->
    <com-item-add v-if="isShowDetail" @onClose="onShowDetail" />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import ComListItem from '@/components/ComListItem.vue'
import ComItemAdd from '@/components/ComItemAdd.vue'

export default defineComponent({
  name: 'ComList',
  components: {
    ComListItem,
    ComItemAdd,
  },
  props: {
    tasks: {
      type: Array,
      default: () => [
        { id: 1, content: '早起', complete: false },
        { id: 2, content: '午睡', complete: false },
        { id: 3, content: '打瞌睡', complete: false },
        { id: 4, content: '跑步', complete: true },
        { id: 5, content: '晚睡', complete: false },
        { id: 1, content: '早起', complete: false },
        { id: 2, content: '午睡', complete: false },
        { id: 3, content: '打瞌睡', complete: false },
        { id: 4, content: '跑步', complete: true },
        { id: 5, content: '晚睡', complete: false },
        { id: 1, content: '早起', complete: false },
        { id: 2, content: '午睡', complete: false },
        { id: 3, content: '打瞌睡', complete: false },
        { id: 4, content: '跑步', complete: true },
        { id: 5, content: '晚睡', complete: false },
        { id: 1, content: '早起', complete: false },
        { id: 2, content: '午睡', complete: false },
        { id: 3, content: '打瞌睡', complete: false },
        { id: 4, content: '跑步', complete: true },
        { id: 5, content: '晚睡', complete: false },
      ],
    },
  },
  setup() {
    const isShowDetail = ref(false)

    function onShowDetail() {
      isShowDetail.value = !isShowDetail.value
    }
    return {
      isShowDetail,
      onShowDetail,
    }
  },
  methods: {
    test() {
      console.log('123')
    },
  },
})
</script>

<style lang="scss" scoped>
.com-list {
  width: 100%;
  box-shadow: 0 0 24px rgba(0, 0, 0, 0.15);
  border-radius: 24px;
  position: relative;
  h3 {
    font-size: 14px;
    font-weight: 600;
    color: rgb(179, 179, 179);
  }
  .add-btn {
    position: fixed;
    z-index: 2;
    right: 48px;
    bottom: 72px;
    width: 48px;
    height: 48px;
    background-color: rgb(29, 135, 177);
    transform: rotate(45deg);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    i {
      z-index: 1;
      font-size: 24px;
      color: #fff;
      transition: all 0.2s ease;
    }
  }
  .add-btn:active {
    transform: scale(1.08);
  }
  // .add-btn::after {
  //   content: '';
  //   position: absolute;
  //   z-index: 1;
  //   width: 100%;
  //   height: 100%;
  //   border-radius: 50%;
  //   border: 3px solid rgb(29, 135, 177);
  //   opacity: 1;
  //   transform: scale(0.8);
  //   transition: all 0.3s ease 0.02s;
  // }
  // .add-btn:active {
  //   transform: scale(1.08);
  //   &::after {
  //     transform: scale(1.8);
  //     opacity: 0;
  //   }
  // }
  ul {
    width: 96%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 16px;
    li {
      width: 100%;
      margin-top: 12px;
      cursor: pointer;
    }
    & > li:nth-child(2n + 1) /deep/ .check-button {
      border: 1px solid rgb(176, 21, 223);
    }
    & > li:nth-child(2n + 1) /deep/ .check-button::after {
      background-color: rgb(176, 21, 223);
      box-shadow: 0 0 18px rgb(176, 21, 223);
    }
    & > li:nth-child(2n) /deep/ .check-button {
      border: 1px solid rgb(36, 53, 207);
    }
    & > li:nth-child(2n) /deep/ .check-button::after {
      background-color: rgb(36, 53, 207);
      box-shadow: 0 0 10px rgb(36, 53, 207);
    }
  }
}
</style>
