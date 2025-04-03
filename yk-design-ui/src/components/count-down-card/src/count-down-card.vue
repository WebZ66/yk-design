<template>
  <div :class="bem()">
    <YkCountDown :auto-play="autoPlay" :time="props.time" @change="handleRemainChange">
      <div class="container" v-for="item in dataTime" :key="item.id">
        <div :class="bem('content')">
          <div class="top bg">{{ currentTimeObj?.[item.type] }}</div>
          <div class="box">
            <div class="front flod-block">
              {{ (currentTimeObj?.[item.type] ?? 0) + 1 == 60 ? 0 : (currentTimeObj?.[item.type] ?? 0) + 1 }}
            </div>
            <div class="back flod-block">{{ currentTimeObj?.[item.type] }}</div>
          </div>
          <div class="bottom bg">
            {{ (currentTimeObj?.[item.type] ?? 0) + 1 == 60 ? 0 : (currentTimeObj?.[item.type] ?? 0) + 1 }}
          </div>
        </div>
      </div>
    </YkCountDown>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, computed, onMounted, watch } from 'vue'
import { createCssScope } from '@/utils/bem'
import { YkCountDown, CurrentTime } from '@/components/count-down/src/index'
import { TCountDownCardProps, countDownCardEmits, TDataTimeItem } from './count-down-card'
import '../style'
defineOptions({
  name: 'YkCountDownCard',
})
const props = withDefaults(defineProps<TCountDownCardProps>(), {
  autoPlay: true,
})
const $emits = defineEmits(countDownCardEmits)
const bem = createCssScope('count-down-card')

const boxList = ref<Array<HTMLElement> | null>(null)
onMounted(() => {
  boxList.value = document.querySelectorAll('.box') as any
})
//时间卡片
const dataTime = reactive<TDataTimeItem[]>([
  { id: 0, text: '天', type: 'days' },
  { id: 1, text: '时', type: 'hours' },
  { id: 2, text: '分', type: 'minutes' },
  { id: 3, text: '秒', type: 'seconds' },
])
const currentTimeObj = ref<CurrentTime>()
const oldCurrentTimeObj = ref<CurrentTime>()
const handleRemainChange = (time: CurrentTime) => {
  currentTimeObj.value = time
  $emits('change', time)
  dataTime.forEach((item) => {
    if (oldCurrentTimeObj.value?.[item.type] != currentTimeObj.value?.[item.type]) {
      transform180(item.id)
    }
  })
  oldCurrentTimeObj.value = currentTimeObj.value
}

function transform180(nodeNumber: number) {
  let timer: number | null = null
  let currentflodBoxNode = boxList.value![nodeNumber]
  currentflodBoxNode.style.transition = 'transform 0s' //使其瞬间返回到 0deg
  currentflodBoxNode.style.transform = 'perspective(400px) rotateX(0deg)'
  timer = setTimeout(() => {
    currentflodBoxNode.style.transition = 'transform 0.9s' //缓个100ms执行，0.9秒转完
    currentflodBoxNode.style.transform = 'perspective(400px) rotateX(-180deg)'
    clearTimeout(timer!)
  }, 100) as unknown as number
}
</script>
