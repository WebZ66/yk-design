<template>
  <div class="test-container">
    <h1>测试</h1>
    <hr />

    <router-view></router-view>
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive, useSlots } from 'vue'
import { YkButton } from 'yk-design'
import 'yk-design/style'
</script>

<style scoped>
.test-container {
  padding: 0 100px;
}
</style>
