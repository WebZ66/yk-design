<template>
  <div>
    <YkRadio :label="1" v-model="radio">1</YkRadio>
    <YkRadio :label="2" v-model="radio">2</YkRadio>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import YkRadio from '@/components/radio/src/radio.vue'
const radio = ref(-1)
</script>

<style scoped></style>
