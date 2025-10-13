<template>
  <div :class="bem('wrapper')" :style="wrapperStyle" @mouseenter="handleMouseEnter" @mouseleave="handleMouseLeave"
    @mousedown="onButtonDown" ref="button">
    <div class="yk-slider__button"></div>
  </div>
</template>

<script setup lang='ts'>

import { ref, reactive, computed, onMounted, watch, getCurrentInstance, Ref } from 'vue'
import { createCssScope } from '@/utils/bem'
import { SliderButtonProps } from './slider-button'
import '../style'
const bem = createCssScope('slider-button')
const instance = getCurrentInstance()
const props = withDefaults(defineProps<SliderButtonProps>(), {
  min: 0,
  max: 100,
  step: 1,
})

const $emit = defineEmits(['input'])

const disabled = ref(false)

const dragging = ref(false)

const startX = ref(0)

const currentX = ref(0)

// 控制滑块位置 0-100
const startPosition = ref(0)
const newPosition = ref(0)

const currentPosition = computed(() => {
  return `${(props.value - props.min) / (props.max - props.min) * 100}%`
})

const wrapperStyle = computed(() => {
  return { left: currentPosition.value }
})

function onButtonDown(event: MouseEvent) {
  if (disabled.value) return
  event.preventDefault()
  onDragStart(event)
  window.addEventListener('mousemove', onDragging)
  window.addEventListener('mouseup', onDragEnd)
  window.addEventListener('contextmenu', onDragEnd)
}

function onDragStart(event: MouseEvent) {
  dragging.value = true
  startX.value = event.clientX
  startPosition.value = parseFloat(currentPosition.value)
  newPosition.value = startPosition.value
}

function onDragging(event: MouseEvent) {
  if (dragging.value) {
    let diff = 0
    currentX.value = event.clientX
    const sliderSize = instance?.parent?.exposed?.sliderSize.value
    diff = (currentX.value - startX.value) / sliderSize * 100
    newPosition.value = startPosition.value + diff
    setPosition(newPosition)
  }
}

function onDragEnd() {
  dragging.value = false
  window.removeEventListener('mousemove', onDragging)
  window.removeEventListener('mouseup', onDragEnd)
  window.removeEventListener('contextmenu', onDragEnd)
}

function setPosition(newPosition: Ref<number>) {
  if (newPosition.value === null || isNaN(newPosition.value)) return
  if (newPosition.value < 0) {
    newPosition.value = 0
  } else if (newPosition.value > 100) {
    newPosition.value = 100
  }
  // 每一个步长对应的滑块轨道长度的百分比
  const lengthPerStep = 100 / ((props.max - props.min) / props.step)
  // 计算出一共需要的步数向下取整
  const steps = Math.round(newPosition.value / lengthPerStep)
  let value = steps * lengthPerStep * (props.max - props.min) * 0.01 + props.min
  $emit('input', value)
}

</script>
