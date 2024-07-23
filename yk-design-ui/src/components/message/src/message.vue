<template>
  <Transition
    :name="transitionName"
    @enter="handleEnter"
    @after-leave="!visible && onDestroy()"
  >
    <div
      v-show="visible"
      ref="messageRef"
      :class="{
        'yk-message': true,
        [`yk-message--${type}`]: type,
        'is-close': showClose,
      }"
      role="alert"
      :style="customStyle"
    >
      <YkIcon :class="bem('icon')" :name="iconName" :color="iconColor"></YkIcon>
      <div :class="bem('content')">
        <slot>
          <RenderVnode v-if="message" :vNode="message"></RenderVnode>
        </slot>
      </div>
      <YkIcon
        class="yk-icon__close"
        v-if="showClose"
        name="cha"
        :color="iconColor"
        @click="close"
      ></YkIcon>
    </div>
  </Transition>
</template>

<script lang="ts" setup>
import { ref, reactive, onMounted, watch, computed } from 'vue'
import { createCssScope } from '@/utils/bem'
import type { MessageProps, MessageCompInstance } from './message'
import { iconNameMap } from '@/utils/shape'
import { RenderVnode } from '@/utils/renderVnode'
import { YkIcon } from '@/components/icon/src/index'
import { useOffset } from '@/hooks'
import { getLastBottomOffset } from './methods'
import '../style/index'
const bem = createCssScope('message')

defineOptions({ name: 'YkMessage' })

const props = withDefaults(defineProps<MessageProps>(), {
  type: 'success',
  duration: 3000,
  offset: 10,
  transitionName: 'fade-up',
  showClose: false,
})

const iconName = computed(() => iconNameMap[props.type].name)
const iconColor = computed(() => iconNameMap[props.type].color)
const customStyle = computed(() => {
  return { top: topOffset.value + 'px' }
})

const visible = ref(false)
const messageRef = ref<HTMLDivElement>()

/* 计算偏移量 */
//容器高度
const boxHeight = ref(0)
function handleEnter() {
  boxHeight.value = messageRef.value!.getBoundingClientRect().height
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
  getLastBottomOffset: getLastBottomOffset.bind(props),
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
}
onMounted(() => {
  visible.value = true
  startTimer()
})

defineExpose<MessageCompInstance>({
  close,
  bottomOffset,
})
</script>
