<template>
  <div class="home">
    <com-drawer :menu="menuData" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ComDrawer from '@/components/ComDrawer.vue'

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
  },
  setup() {
    return {
      menuData,
    }
  },
})
</script>
