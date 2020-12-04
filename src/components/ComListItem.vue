<template>
  <div class="com-list-item">
    <label>
      <input type="checkbox" />
      <span class="check-button"></span>
      <span class="title">{{ model.content }}</span>
    </label>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'ComListItem',
  props: {
    model: {
      type: Object,
      default: () => null,
    },
  },
})
</script>

<style lang="scss" scoped>
.com-list-item {
  box-sizing: border-box;
  width: 100%;
  height: 50px;
  box-shadow: 2px 4px 6px 1px rgb(226, 226, 226);
  background-color: #fff;
  border-radius: 24px;
  label {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    padding: 0 12px 0 12px;
    input[type='checkbox'] {
      display: none;
    }
    .check-button {
      width: 24px;
      height: 24px;
      margin-right: 12px;
      border-radius: 50%;
      position: relative;
    }
    .title {
      flex: 1;
      display: inline-block;
      font-size: 20px;
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
      color: #777;
    }
    input:checked ~ .title {
      opacity: 0.8;
      text-decoration: line-through;
    }
    input:checked ~ .check-button::after {
      content: '';
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 50%;
      height: 50%;
      border-radius: 50%;
    }
  }
}
</style>
