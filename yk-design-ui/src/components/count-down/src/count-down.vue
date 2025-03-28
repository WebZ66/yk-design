<template>
  <div :class="bem()">
    <div :class="bem('container')">
      <div class="block top">{{ `00${time.ss!}`.slice(-2) }}</div>
      <div class="box" ref="boxRef">
        <div class="front">{{ `00${time.ss! + 1 == 60 ? 0 : time.ss! + 1}`.slice(-2) }}</div>
        <div class="back">{{ `00${time.ss!}`.slice(-2) }}</div>
      </div>
      <div class="block bottom">{{ `00${time.ss! + 1 == 60 ? 0 : time.ss! + 1}`.slice(-2) }}</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, computed, onMounted, watch, onBeforeUnmount } from 'vue'
import type { TCountDownProps, TTimeType } from './count-down'
import { createCssScope } from '@/utils/bem'
import { durationFormatter } from '@/utils/time'
import { useInterval } from '@/hooks/'
import '../style'
const bem = createCssScope('count-down')
defineOptions({
  name: 'YkCountDown',
})
const props = withDefaults(defineProps<TCountDownProps>(), {
  isMilliSecond: false,
})
//倒计时时间
let duration = props.isMilliSecond ? Math.round(+props.time / 1000) : Math.round(+props.time)
// 展示时间
const time = reactive<TTimeType>(durationFormatter(duration))

const boxRef = ref<HTMLDivElement>()

let stopInterval: (() => void) | null = null

//计算倒计时
const getTime = () => {
  props.onStart && props.onStart()
  boxRef.value?.clientHeight //强行触发一次重绘
  boxRef.value!.style.transition = 'all 1s'
  boxRef.value!.style.transform = 'rotateX(-180deg)'

  stopInterval = useInterval(() => {
    if (duration <= 0) {
      props.onFinish && props.onFinish()
      return stopInterval!()
    }
    transform180(boxRef.value!)
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

const transform180 = (node: HTMLElement) => {
  let timerId: any = null
  node.style.transition = 'transform 0s' //使其瞬间返回到 0deg
  node.style.transform = 'rotateX(0deg)'
  timerId = setTimeout(() => {
    node.style.transition = 'transform 0.9s' //缓个100ms执行，0.9秒转完
    node.style.transform = 'rotateX(-180deg)'
    clearTimeout(timerId)
  }, 100)
}

onMounted(() => {
  getTime()
})
onBeforeUnmount(() => {
  stopInterval!()
})
</script>

<style scoped></style>
