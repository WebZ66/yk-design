<template>
  <div :class="bem()">{{ time.mm }}:{{ time.ss }}</div>
</template>

<script setup lang="ts">
import { ref, reactive, computed, onMounted, watch, onBeforeUnmount } from 'vue'
import type { TCountDownProps, TTimeType } from './count-down'
import { createCssScope } from '@/utils/bem'
import { durationFormatter } from '@/utils/time'
import { useInterval } from '@/hooks/'
const bem = createCssScope('count-down')
defineOptions({
  name: 'YkCountDown',
})
const props = withDefaults(defineProps<TCountDownProps>(), {
  isMilliSecond: false,
})
let duration = props.isMilliSecond ? Math.round(+props.time / 1000) : Math.round(+props.time)
const time = ref<TTimeType>(durationFormatter(duration))
let stopInterval: (() => void) | null = null

const getTime = () => {
  stopInterval = useInterval(
    () => {
      if(duration<=0) return stopInterval!()
      duration = duration - 1
      const timeObj = durationFormatter(duration)
      if(timeObj.ss==-1) timeObj.ss=59
      time.value = timeObj
    },
    1000
  )
}
onMounted(() => {
  getTime()
})
onBeforeUnmount(() => {
  stopInterval!()
})
</script>

<style scoped></style>
