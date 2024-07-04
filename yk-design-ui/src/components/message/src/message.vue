<template>
  <Transition :name="transitionName" @after-leave="!visible && onDestroy()">
    <div
      v-show="visible"
      ref="messageRef"
      :class="{ [`yk-message--${type}`]: type, 'is-close': showClose }"
      role="alert"
    ></div>
  </Transition>
</template>

<script lang="ts" setup>
import { ref, reactive, onMounted, watch } from 'vue'
import { createCssScope } from '@/utils/bem'
import type { MessageProps } from './message'
import '../style/index'
const bem = createCssScope('message')

defineOptions({ name: 'YkMessage' })

const props = withDefaults(defineProps<MessageProps>(), {
  type: 'info',
  duration: 3000,
  offset: 10,
  transitionName: 'fade-up',
})

const visible = ref(false)
const messageRef = ref<HTMLDivElement>()

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
</script>
