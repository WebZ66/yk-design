<template>
  <div class="yk-carousel" :style="carouselStyle" ref="carousel">
    <div class="carousel-list" ref="carouselListRef">
      <div
        class="carousel-item"
        v-for="(item, index) in carouselList"
        :key="index"
      >
        <img :src="item" alt="'暂时无法显示'" />
      </div>
    </div>
    <div class="carousel-arrow carousel-arrow-left" @click="moveLeft">
      <yk-icon :name="'icon-left'" :color="'#ccc'"></yk-icon>
    </div>
    <div class="carousel-arrow carousel-arrow-right" @click="moveRight">
      <yk-icon :name="'icon-right'" :color="'#ccc'"></yk-icon>
    </div>
    <div class="indicator">
      <span
        :class="{ actived: activeIndex == index }"
        v-for="(item, index) in carouselList"
        :key="index"
        @click="moveTo(index)"
      ></span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, computed, onMounted, watch, nextTick } from 'vue'
import type { CarouselProps } from './type'
import { getSize } from '@/utils/shape'
//ts-ignore

const props = withDefaults(defineProps<CarouselProps>(), {
  size: 'l',
  carouselList() {
    return ['1', '2', '3']
  },
})
const count = ref(props.carouselList?.length)
const activeIndex = ref(0)
const carousel = ref<HTMLDivElement | null>(null)
const carouselListRef = ref<HTMLDivElement | null>(null)
onMounted(() => {
  let size = getSize(props.size)
  carousel.value?.style.setProperty('--size', `${size}px`)
  init()
})
function init() {
  //找到第一个元素克隆，放到末尾，找到末尾元素克隆放到第一个
  let firstElement = carouselListRef.value?.firstElementChild?.cloneNode(true)
  let lastElement = carouselListRef.value?.lastElementChild?.cloneNode(true)
  carouselListRef.value?.appendChild(firstElement!)
  carouselListRef.value?.insertBefore(
    lastElement!,
    carouselListRef.value.firstElementChild
  )
}

/* 基于下标移动 */
function moveTo(index: number) {
  carouselListRef.value!.style.transform = `translateX(-${index}00%)`
  carouselListRef.value!.style.transition = 'all 0.5s'
  activeIndex.value = index
}

function moveLeft() {
  if (activeIndex.value == 0) {
    //快速的跳到最后一个，然后再往前滑动
    carouselListRef.value!.style.transition = 'none'

    carouselListRef.value!.style.transform = `translateX(-${count.value}00%)`
    //等待浏览器渲染执行,并不是DOM更新渲染结束，所以用nextTick无效
    // carouselListRef.value!.clientHeight
    requestAnimationFrame(() => {
      moveTo(count.value - 1)
    })
  } else {
    //如果不是第一张，那么就activeIndex-1然后移动
    activeIndex.value = activeIndex.value - 1
    moveTo(activeIndex.value)
  }
}
function moveRight() {
  if (activeIndex.value == count.value - 1) {
    //到了最后一张，快速跳到克隆的第一张
    carouselListRef.value!.style.transition = 'none'
    carouselListRef.value!.style.transform = 'translateX(100%)'
    requestAnimationFrame(() => {
      moveTo(0)
    })
  } else {
    activeIndex.value = activeIndex.value + 1
    moveTo(activeIndex.value)
  }
}
window.moveTo = moveTo

/* 样式 */
const carouselStyle = computed(() => {
  const width = getCarouselSize(props.size)
  const height = width * 0.6
  return {
    width: width + 'px',
    height: height + 'px',
  }
})
const getCarouselSize = (size: string | number) => {
  switch (size) {
    case 's':
      return 380
    case 'm':
      return 400
    case 'l':
      return 500
    case 'xl':
      return 600
    default:
      return 500
  }
}
</script>

<style lang="scss" scoped>
@import '../style/index.scss';
</style>
