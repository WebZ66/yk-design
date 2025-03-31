<template>
  <div :class="bem()">
    <div :class="bem('container')">
      {{ current.seconds }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, computed, onMounted, watch, onBeforeUnmount } from 'vue'
import type { TCountDownProps } from './count-down'

import { createCssScope } from '@/utils/bem'
import { useCountDown } from './useCountDown'
import '../style'
const bem = createCssScope('count-down')
defineOptions({
  name: 'YkCountDown',
})
const props = withDefaults(defineProps<TCountDownProps>(), {
  isMilliSecond: false,
  autoPlay: true,
})


const { current,start } = useCountDown({
  time: 5 * 1000,
  isMilliSecond:false,
  autoPlay:false,
  onChange: (res) => {
    console.log('res', res)
  },
})
console.log('current', current.value)
onMounted(()=>{
  start()
})
</script>

<style scoped></style>
