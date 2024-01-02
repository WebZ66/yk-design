<template>
  <div>
    <YkRadio :label="1" v-model="radio">123</YkRadio>
    <YkRadio :label="3" v-model="radio"></YkRadio>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import YkRadio from '@/components/radio/src/radio.vue'
const radio = ref(2)
</script>

<style scoped></style>
