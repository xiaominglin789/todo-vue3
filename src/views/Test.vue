<template>
  <div class="home">
    <com-drawer></com-drawer>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ComDrawer from '@/components/ComDrawer.vue'

export default defineComponent({
  name: 'Test',
  components: {
    ComDrawer,
  },
})
</script>
