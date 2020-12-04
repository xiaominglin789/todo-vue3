<template>
  <div class="test">
    <com-list></com-list>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ComList from '@/components/ComList.vue'

export default defineComponent({
  name: 'Home',
  components: {
    ComList,
  },
})
</script>
