<template>
  <div class="test">
    <YkSelect v-model="value"></YkSelect>
  </div>
</template>

<script setup lang="ts">
import { YkSelect } from '@/packages'
import { ref } from 'vue'
const value = ref('')
</script>

<style></style>
