<template>
  <div class="test-container">
    <h1>测试</h1>
    <hr />
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive, useSlots } from 'vue'
import { YkButton, YkSwitch } from 'yk-design'
import 'yk-design/style'
const switchFlag = ref(false)
</script>

<style scoped>
.test-container {
  padding: 0 100px;
}
</style>
