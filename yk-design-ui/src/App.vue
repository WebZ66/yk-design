<template>
  <div class="test-container">
    <h1>测试</h1>
    <hr />
    <YkTest />
    <Radio />
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive } from 'vue'
import Radio from '@/components/radio/src/index.vue'
</script>

<style scoped>
.test-container {
  padding: 0 100px;
}
</style>
