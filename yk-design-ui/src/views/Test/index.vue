<template>
  <div>
    <YkCheckbox>123</YkCheckbox>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, isRef, onMounted } from 'vue'

const str = ref('')

const inputRef = ref()
onMounted(() => {
  console.log(inputRef.value)
})
</script>

<style scoped></style>
