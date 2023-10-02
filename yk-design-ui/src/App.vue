<template>
  <div class="test-container">
    <h1>测试</h1>
    <hr />
    <YkTest />
    <upload></upload>
  </div>
  <div class="son"></div>
</template>

<script lang="ts" setup>
import { ref, reactive } from 'vue'
import upload from './components/upload/src/upload.vue'
</script>

<style scoped>
.test-container {
  padding: 0 100px;
}
</style>
