<template>
  <div class="yk-avatar-group" ref="$avatarGroup">
    <slot></slot>
    <div class="yk-avatar-group-more" :style="ykAvatarGroupMore">
      <span>+{{ overStep - 1 }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, computed, onMounted, watch, provide } from 'vue'
import type { AvatarGroupProps } from './type'
import { getSize, getShape } from '@/utils/shape'

const props = withDefaults(defineProps<AvatarGroupProps>(), {
  max: 3,
  shape: 'circle',
  size: 40,
})
const ykAvatarGroupMore = computed(() => {
  return {
    width: size + 'px',
    height: size + 'px',
    borderRadius: shape,
    display: overStep.value > 1 ? 'flex' : 'none',
  }
})
const size = getSize(props.size)
const shape = getShape(props.shape)
provide('size', props.size)
provide('shape', props.shape)

onMounted(() => {
  addStyle()
})
const $avatarGroup = ref()
const overStep = ref(0)
function addStyle() {
  let box: HTMLDivElement = $avatarGroup.value
  console.log(box.children)
  Array.from(box.children).map((item, index) => {
    ;(item as HTMLDivElement).style.marginRight = -size / 3 + 'px'
    if (index + 1 > props.max) {
      overStep.value++
      ;(item as HTMLDivElement).style.display = 'none'
    }
  })
}
</script>

<style lang="scss" scoped>
@import '../style/index.scss';
</style>
