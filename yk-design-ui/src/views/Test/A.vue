<template>
  <div>
    <radio-group v-model="radio" @change="handleChange">
      <yk-radio :label="1"></yk-radio>
      <yk-radio :label="2"></yk-radio>
    </radio-group>
    <button>点击</button>

    <hr />
    <!-- <yk-radio v-model="radio2" :label="3"></yk-radio>
    <yk-radio v-model="radio2" :label="4"></yk-radio> -->
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive, provide, watch } from 'vue'
import RadioGroup from './B.vue'
import YkRadio from './C.vue'

const radio = ref(0)
const radio2 = ref(3)

function handleChange(newValue) {
  console.log(newValue)
}
</script>

<style scoped></style>
