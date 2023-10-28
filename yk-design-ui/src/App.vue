<template>
  <div class="test-container">
    <h1>测试</h1>
    <hr />
    <YkTest />
    <Carousel :size="'l'" :carousel-list="[img1, img2, img3, img4]" />
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive } from 'vue'
import Carousel from '@/components/carousel/src/index.vue'
const img1 = new URL('./assets/images/1.png', import.meta.url).href
const img2 = new URL('./assets/images/2.png', import.meta.url).href
const img3 = new URL('./assets/images/3.png', import.meta.url).href
const img4 = new URL('./assets/images/test.png', import.meta.url).href
</script>

<style scoped>
.test-container {
  padding: 0 100px;
}
</style>
