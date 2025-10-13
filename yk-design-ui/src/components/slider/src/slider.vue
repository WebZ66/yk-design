<template>
  <div :class="bem()" ref="sliderRef">
    <!-- 滑道 -->
    <div :class="bem('runway')">
      <div :class="bem('bar')" :style="runwayStyle" />
      <!-- 滑块按钮 -->
      <slider-button :value="sliderValue" @input="handleSliderButtonInput" />
      <!-- 间断点 -->
      <div class="el-slider__stop"></div>
    </div>
  </div>
</template>

<script setup lang='ts'>
import { ref, reactive, computed, onMounted, watch } from 'vue'
import { createCssScope } from '@/utils/bem'
import SliderButton from './slider-button.vue'
import '../style'

const bem = createCssScope('slider')

const sliderSize = ref(0)
const sliderRef = ref<HTMLElement>()

const sliderValue = ref(0)

const runwayStyle = computed(() => {
  return { width: `${sliderValue.value}%` }
})

onMounted(() => {
  if (sliderRef.value) {
    sliderSize.value = sliderRef.value.clientWidth
  }
})

function handleSliderButtonInput(value: number) {
  sliderValue.value = value
}

defineExpose({
  sliderSize
})

</script>
