<template>
  <div>
    <YkInput v-model="str" :style="{ width: '300px' }" showPassword> </YkInput>
  </div>
</template>

<script setup lang="ts">
import YkInput from '@/components/input/src/input.vue'
import { ref, reactive, isRef } from 'vue'

const str = ref('')

function handleClear() {
  console.log('触发了清空回调')
}
</script>

<style scoped></style>
