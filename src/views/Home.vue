<template>
  <div class="home">
    <com-drawer :menu="menuData">
      <com-panel class-name="home-top" />
    </com-drawer>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ComDrawer from '@/components/ComDrawer.vue'
import ComPanel from '@/components/ComPanel.vue'

const menuData = [
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
]

export default defineComponent({
  name: 'Home',
  components: {
    ComDrawer,
    ComPanel,
  },
  setup() {
    return {
      menuData,
    }
  },
})
</script>

<style lang="scss" scoped>
.home {
  .home-top {
    /deep/.panel-top {
      height: 100px !important;
    }
  }
}
</style>
