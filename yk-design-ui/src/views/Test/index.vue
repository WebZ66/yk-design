<template>
  <div>
    <input ref="input1" type="radio" :value="1" v-model="radio.flag" />1
    <input ref="input2" type="radio" :value="2" v-model="radio.flag" />2
    <button @click="handleClick">点击</button>
    <hr />
    <!-- 确实分成了两组 -->
    <A></A>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, isRef } from 'vue'
import A from './A.vue'
import YkRadio from '@/components/radio/src/radio.vue'

const input1 = ref()
const input2 = ref()
const handleClick = function () {
  const r1 = document.querySelector('#radio1')
  const r2 = document.querySelector('#radio2')
}
const radio = reactive({
  flag: 1,
})
</script>

<style scoped></style>
