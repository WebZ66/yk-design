<template>
  <div :class="ykAvatarClass" :style="ykAvatarStyle">
    <img v-if="props.imgUrl" :src="props.imgUrl" alt="" />
    <span v-else ref="$text" class="yk-avatar-text">
      <YkIcon :name="'jiahao'"></YkIcon>
    </span>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, computed, onMounted, shallowRef, inject } from 'vue'
import { getSize, getShape } from '@/utils/shape'
import type { IAvatarProps } from './type'

defineOptions({
  name: 'YkAvatar',
})

const props = withDefaults(defineProps<IAvatarProps>(), {
  size: 'l',
  shape: 'circle',
  text: '头像',
})
//头像组传的大小
const size = inject<IAvatarProps['size']>('size', undefined)
const shape = inject<IAvatarProps['shape']>('shape', undefined)

const $text = shallowRef<HTMLSpanElement>()
onMounted(() => {
  if (!$text.value) return
  const textWidth = $text.value?.offsetWidth
  const wrapperWidth = getSize(size || props.size)
  console.log('wrapperWidth', wrapperWidth)
  let scaleRate = wrapperWidth / textWidth

  if (textWidth > wrapperWidth) {
    if (scaleRate > 0.5) {
      $text.value.style.transform = `scale(${scaleRate - 0.2})`
    } else {
      $text.value.style.transform = `scale(${scaleRate})`
    }
  }
})

const ykAvatarClass = computed(() => {
  return {
    'yk-avatar': true,
  }
})
const ykAvatarStyle = computed(() => {
  const finalSize = getSize(size || props.size)
  const finalShape = getShape(shape || props.shape)
  return {
    width: finalSize + 'px',
    height: finalSize + 'px',
    borderRadius: finalShape,
  }
})
</script>

<style lang="scss" scoped>
@import '../style/index.scss';
</style>
