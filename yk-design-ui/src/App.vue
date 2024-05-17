<template>
  <div class="test-container">
    <h1>测试</h1>
    <hr />
    <YkButton />
    <router-view></router-view>
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive, useSlots } from 'vue'
</script>

<style scoped>
.test-container {
  padding: 0 100px;
}
</style>
