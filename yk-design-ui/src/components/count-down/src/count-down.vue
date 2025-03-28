<template>
  <div :class="bem()">{{ `00${time.dd}`.slice(-2) }}:{{ `00${time.hh}`.slice(-2) }}:{{ `00${time.mm}`.slice(-2) }}:{{ `00${time.ss}`.slice(-2) }}</div>
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
const time = reactive<TTimeType>(durationFormatter(duration))
let stopInterval: (() => void) | null = null

const getTime = () => {
  stopInterval = useInterval(() => {
    if (duration <= 0) return stopInterval!()
    duration = duration - 1
    const { dd = 0, hh = 0, mm = 0, ss = 0 } = durationFormatter(duration)
    if (ss == -1) time.ss = 59
    if (mm == -1) time.mm = 59
    if (hh == -1) time.mm = 23
    time.dd = dd
    time.hh = hh
    time.mm = mm
    time.ss = ss
  }, 1000)
}
onMounted(() => {
  getTime()
})
onBeforeUnmount(() => {
  stopInterval!()
})
</script>

<style scoped></style>
