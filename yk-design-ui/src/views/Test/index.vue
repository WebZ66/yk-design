<template>
  <div>
    <YkInput>
      <template #prepend>
        <span>123</span>
      </template>
    </YkInput>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, isRef } from 'vue'
import YkInput from '@/components/input/src/input.vue'
</script>

<style scoped></style>
