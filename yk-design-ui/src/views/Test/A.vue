<template>
  <div>
    我是A组件
    <B v-model="radio">
      <C :label="1"></C>
      <C :label="2"></C>
    </B>
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive, provide, watch } from 'vue'
import B from './B.vue'
import C from './C.vue'

const radio = ref(0)
const radio2 = ref(1)

watch(radio, (newValue) => {
  console.log('radio', newValue)
})
</script>

<style scoped></style>
