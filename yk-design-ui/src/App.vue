<template>
  <div class="test-container">
    <h1>测试</h1>
    <hr />
    <YkButton type="primary" size="s">小型按钮</YkButton>
    <YkButton type="primary" size="m" :loading="true">加载按钮</YkButton>
    <YkButton :type="'secondary'" size="m">深色按钮</YkButton>
    <YkButton :type="'outline'" size="xl">大型按钮</YkButton>
    <YkButton :type="'primary'" size="m" shape="circle">+</YkButton>
    <YkButton :type="'secondary'" size="s" shape="square">+</YkButton>
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive } from 'vue'
import YkButton from '@/components/Button/src/YkButton.vue'
</script>

<style scoped>
.test-container {
  padding: 0 100px;
}
</style>
