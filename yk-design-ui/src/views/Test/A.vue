<template>
  <div>
    <YkRadioGroup v-model="radio2">
      <yk-radio :value="1">备选项1</yk-radio>
      <yk-radio :value="2">备选项2</yk-radio>
    </YkRadioGroup>

    <yk-radio disabled v-model="radio" :value="1">备选项3</yk-radio>
    <yk-radio v-model="radio" :value="2">备选项4</yk-radio>
    <hr />
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive, provide, watch } from 'vue'
import YkRadio from '@/components/radio/src/radio.vue'
import YkRadioGroup from '@/components/radio/src/radio-group.vue'
const radio = ref('2')

const radio2 = ref('1')
</script>

<style scoped></style>
