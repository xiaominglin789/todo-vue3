<template>
  <div class="home">
    <com-panel />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ComPanel from '@/components/ComPanel.vue'

export default defineComponent({
  name: 'Home',
  components: {
    ComPanel
  },
})
</script>
