<template>
  <div :class="bem()">
    <div :class="bem('time')">
      <slot>
        {{ parseFormatTime }}
      </slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, computed, onMounted, watch, onBeforeUnmount } from 'vue'
import { TCountDownProps, countDownEmits } from './count-down'
import { createCssScope } from '@/utils/bem'
import { useCountDown } from './useCountDown'
import { parseFormat } from '@/utils/time'
import '../style'
const bem = createCssScope('count-down')
defineOptions({
  name: 'YkCountDown',
})
const props = withDefaults(defineProps<TCountDownProps>(), {
  isMilliSecond: false,
  autoPlay: true,
})
const $emits = defineEmits(countDownEmits)

const { current, start, pause, reset } = useCountDown({
  ...props,
  onChange: (res) => $emits('change', res),
  onFinish: () => $emits('finish'),
})
// 什么是响应式，响应式数据和对应函数（watch、computed、render）关联。  当响应式数据发生变化后，函数会重新执行。 crrent.value响应式数据发生变化，导致computed重新执行，生成新的parseForamtTIme
//parseFormatTime发生变化，重新render。因此，computed回调函数里面必须调用ref.value或者reactive.属性。这就是为什么有时候需要传递ref的属性
const parseFormatTime = computed(() => parseFormat('HH:mm:ss', current.value))

defineExpose({
  current,
  start,
  pause,
  reset,
})
</script>

<style scoped></style>
