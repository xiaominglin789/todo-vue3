<template>
  <div class="com-drawer">
    <!-- 控制器 -->
    <input type="checkbox" name="open" id="open" class="open" />
    <label for="open" class="open-btns">
      <i class="iconfont icon-up"></i>
    </label>
    <!-- 菜单 -->
    <div class="slider">
      <header>
        <img src="../assets/logo.png" alt="" />
        <br />
        Json Tikket
      </header>
      <!-- 菜单 -->
      <ul>
        <li
          v-for="(item, index) in menu"
          :key="index"
          :style="'--i:' + (index + 1)"
        >
          <a href="#">
            <i :class="['iconfont', item.icon]"></i>
            <span class="title">{{ item.title }}</span>
          </a>
        </li>
      </ul>
    </div>
    <section>
      <!-- 展示区-内容 -->
      <slot />
    </section>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'ComDrawer',
  props: {
    menu: {
      type: Array,
      default: () => [
        {
          title: 'Templates',
          icon: 'icon-tag',
          href: '#',
        },
        {
          title: 'Categories',
          icon: 'icon-category',
          href: '#',
        },
        {
          title: 'Analytics',
          icon: 'icon-sector',
          href: '#',
        },
        {
          title: 'Settings',
          icon: 'icon-setting',
          href: '#',
        },
      ],
    },
  },
})
</script>

<style lang="scss" scoped>
.com-drawer {
  width: 100%;
  height: 100vh;
  box-sizing: border-box;
  position: relative;
  .open {
    display: none;
  }
  .open-btns {
    user-select: none;
    box-sizing: border-box;
    position: fixed;
    top: 36px;
    left: 30px;
    z-index: 9999;
    width: 36px;
    height: 36px;
    border-radius: 50%;
    border: 1px solid rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    transform: translateX(0px) rotate(0deg);
    transition: all 0.3s ease;
    i {
      transform: rotate(90deg);
    }
  }
  .open-btns:active {
    outline: none;
    transform: scale(1.005);
    border-radius: 50%;
  }
  .slider {
    box-sizing: border-box;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 999;
    width: 100vw;
    height: 100vh;
    background-color: #08083c;
    user-select: none;
    transform: translateX(-100%);
    opacity: 0;
    transition: all 0.3s ease;
    header {
      width: 100%;
      min-height: 216px;
      // min-height: 120px;
      font-size: 20px;
      color: #fff;
      padding: 36px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      img {
        width: 56px;
        height: 56px;
        border-radius: 50%;
        border: 1px solid #fff;
        cursor: pointer;
      }
    }
    ul a {
      display: block;
      line-height: 50px;
      font-size: 20px;
      color: #fff;
      padding-left: 36px;
      border-top: 1px solid rgba(255, 255, 255, 0.1);
      border-bottom: 1px solid black;
      text-decoration: none;
    }
    li {
      transform: translateX(-60px);
      opacity: 0;
    }
    li:hover a {
      padding-left: 40px;
    }
    li a i {
      margin-right: 10px;
      font-size: 22px;
    }
  }
  ul {
    > :nth-child(1) a {
      border-top: none;
      border-bottom: none;
    }
  }
  /** section */
  section {
    box-sizing: border-box;
    width: 100vw;
    height: auto;
    box-sizing: border-box;
    transform: translateX(0%);
    background: #fff;
    transition: all 0.5s ease;
  }
  /** 侧边栏效果 */
  #open:checked ~ section {
    position: fixed;
    right: 0;
    z-index: 1000;
    width: 100%;
    height: 100vh;
    border-radius: 36px;
    z-index: 1000;
    opacity: 0.9;
    transform: translateX(80%) scale(0.9);
  }
  #open:checked ~ .slider {
    transform: translateX(0%);
    opacity: 1;
    ul li {
      transition: all 0.3s ease-in-out calc(var(--i) * 80ms + 200ms);
      transform: translateX(0px);
      opacity: 1;
    }
  }
  #open:checked ~ .open-btns {
    transform: translateX(60vw) rotate(175deg);
    box-shadow: 0px 0px 10px #fff;
    i {
      transform: rotate(90deg);
      color: #fff;
    }
  }
}
</style>
