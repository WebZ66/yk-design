<template>
  <div>
    <!-- <YkRadio :label="1" v-model="radio">1</YkRadio>
    <YkRadio :label="3" v-model="radio">3</YkRadio> -->

    <!-- 确实分成了两组 -->
    <A></A>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import A from './A.vue'
import YkRadio from '@/components/radio/src/radio.vue'
const radio = ref(2)
</script>

<style scoped></style>
