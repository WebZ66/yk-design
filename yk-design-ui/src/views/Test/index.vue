<template>
  <div>
    <YkInput v-model="str" :style="{ width: '300px' }" ref="inputRef">
      <template #prepend>
        <div>1323</div>
      </template>
    </YkInput>
  </div>
</template>

<script setup lang="ts">
import YkInput from '@/components/input/src/input.vue'

import { ref, reactive, isRef, onMounted } from 'vue'

const str = ref('')

const inputRef = ref()
onMounted(() => {
  console.log(inputRef.value)
})
</script>

<style scoped></style>
