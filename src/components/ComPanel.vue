<template>
  <div class="com-panel">
    <h1 class="panel-title">{{ title }}</h1>
    <div class="panel-content">
      <p class="panel-text">{{ text }}</p>
      <ul>
        <div v-for="(task, index) in tasks" :key="index" class="task-box">
          <p class="task-total">{{ task.total + 'tasks' }}</p>
          <h3 class="task-type">{{ task.type }}</h3>
          <!-- progress -->
          <div class="task-progress task-progress-bar">
            <div
              class="task-progress-bar task-progress-hover"
              :style="{
                width: useComputedScale(task.complete, task.total) + '%',
              }"
            ></div>
          </div>
        </div>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'ComPanel',
  props: {
    title: {
      type: String,
      default: "What's up, Joy!",
    },
    text: {
      type: String,
      default: 'CATEGORIES',
    },
    tasks: {
      type: Array,
      default: () => [
        {
          type: 'Business',
          total: 40,
          complete: 15,
        },
        {
          type: 'Personal',
          total: 18,
          complete: 10,
        },
      ],
    },
  },
  setup() {
    function useComputedScale(complete: number, total: number): number {
      if (complete >= total) {
        return 100
      }
      if (complete < 0) {
        return 0
      }
      return (complete / total) * 100
    }

    return {
      useComputedScale,
    }
  },
})
</script>

<style lang="scss" scoped>
.com-panel {
  background: rgb(232, 243, 243);
  .panel-title {
    font-size: 36px;
    font-weight: 600;
    padding: 20px 0;
  }
  .panel-content {
    padding: 10px 0 20px 0;
    .panel-text {
      font-size: 14px;
      font-weight: 600;
      color: #999;
    }
    ul {
      margin-top: 16px;
      display: flex;
      white-space: nowrap;
      overflow-x: scroll;
      .task-box {
        flex: 0 0 180px;
        margin-left: 10px;
        margin-right: 10px;
        height: 100px;
        background-color: #fff;
        border-radius: 24px;
        padding: 12px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        font-size: 14px;
        color: #999;
        .task-type {
          font-size: 24px;
          color: #000;
        }
        .task-progress {
        }
      }
      /** progress-bar */
      .task-progress {
        background-color: rgb(199, 199, 199);
        margin-top: 8px;
      }
      .task-progress-bar {
        height: 6px;
        width: 100%;
        border-radius: 4px;
      }
      .task-progress-hover {
        background-color: #7889e7;
        width: 0%;
        transition: all 0.3s linear;
      }
    }
  }
}
</style>
