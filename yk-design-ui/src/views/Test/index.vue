<template>
  <div>
    <YkToolTip>
      <span :style="{ width: '300px' }">一段文字</span>
    </YkToolTip>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, isRef } from 'vue'
import YkToolTip from '@/components/tooltip/src/tooltip.vue'
</script>

<style scoped></style>
