<template>
  <div class="test-container">
    <h1>测试</h1>
    <hr />
    <div></div>
    <yk-radio-group v-model="value">
      <yk-radio :value="1">1</yk-radio>
      <yk-radio :value="2">2</yk-radio>
    </yk-radio-group>
    <router-view></router-view>
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive, useSlots } from 'vue'
const value = ref(1)
</script>

<style scoped>
.test-container {
  padding: 0 100px;
}
</style>
