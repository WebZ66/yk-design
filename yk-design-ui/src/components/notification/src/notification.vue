<template>
  <Transition
    :name="transitionName"
    @enter="handleEnter"
    @after-leave="!visible && onDestroy()"
  >
    <div
      v-show="visible"
      ref="notifyRef"
      :class="{
        'yk-notification': true,
        [`yk-notification--${type}`]: type,
        'is-close': showClose,
      }"
      role="alert"
      :style="customStyle"
    >
      <YkIcon
        v-if="type"
        :class="bem('icon')"
        :name="iconName"
        :color="iconColor"
      ></YkIcon>
      <div :class="bem('text')">
        <div :class="bem('title')">{{ title }}</div>
        <div :class="bem('content')">
          <slot>
            <RenderVnode v-if="message" :vNode="message" />
          </slot>
        </div>
      </div>
      <YkIcon
        class="yk-notification__icon--close"
        v-if="showClose"
        name="cha"
        color="#909399"
        @click="close"
      ></YkIcon>
    </div>
  </Transition>
</template>
<script setup lang="ts">
import { ref, onMounted, watch, computed } from 'vue'
import { createCssScope } from '@/utils/bem'
import type {
  NotificationProps,
  NotificationTypeComInstance,
} from './notification'
import { iconNameMap } from '@/utils/shape'
import { RenderVnode } from '@/utils/renderVnode'
import { YkIcon } from '@/components/icon/src/index'
import { useOffset } from '@/hooks'

import '../style/index'

const bem = createCssScope('notification')

defineOptions({ name: 'YkNotification' })

const props = withDefaults(defineProps<NotificationProps>(), {
  message: '123',
  duration: 0,
  offset: 20,
  transitionName: 'fade',
  showClose: true,
})
const iconName = computed(() => props.type && iconNameMap[props.type].name)
const iconColor = computed(() => props.type && iconNameMap[props.type].color)
const customStyle = computed(() => {
  return { top: topOffset.value + 'px' }
})

const visible = ref(false)
const notifyRef = ref<HTMLDivElement>()

/* 计算偏移量 */
//容器高度
const boxHeight = ref(0)
function handleEnter() {
  boxHeight.value = notifyRef.value!.getBoundingClientRect().height
}
watch(visible, (val) => {
  //这步是可以省略的，使得退出动画更加丝滑
  if (!val) {
    boxHeight.value = -props.offset
  }
})

const { topOffset, bottomOffset } = useOffset({
  offset: props.offset,
  boxHeight,
  getLastBottomOffset: () => 0,
})

//自动关闭
let timer: any
function startTimer() {
  //持续时间为0，无法自动关闭
  if (props.duration === 0) return
  timer = setTimeout(close, props.duration)
}
function clearTimer() {
  clearTimeout(timer)
}

function close() {
  visible.value = false
  clearTimer()
}
onMounted(() => {
  visible.value = true
  startTimer()
})

defineExpose<NotificationTypeComInstance>({
  close,
  bottomOffset,
})
</script>
