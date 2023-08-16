<template>
  <div class="test-container">
    <h1>测试</h1>
    <hr />
    <YkButton type="primary" size="s">小型按钮</YkButton>
    <span :style="{ 'margin-right': '20px' }"></span>
    <YkButton type="primary" size="m" :loading="true">加载按钮</YkButton>
    <span :style="{ 'margin-right': '20px' }"></span>
    <YkButton :type="'secondary'" size="m">深色按钮</YkButton>
    <span :style="{ 'margin-right': '20px' }"></span>
    <YkButton :type="'outline'" size="xl">大型按钮</YkButton>
    <span :style="{ 'margin-right': '20px' }"></span>
    <YkButton :type="'primary'" size="m" shape="circle">+</YkButton>
    <span :style="{ 'margin-right': '20px' }"></span>
    <YkButton :type="'secondary'" size="s" shape="radius">
      <template #icon>
        <YkIcon name="saoma" color="#fff"></YkIcon>
      </template>
    </YkButton>
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
