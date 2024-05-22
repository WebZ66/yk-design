<template>
  <div :class="bem()" ref="popperContainNode" v-on="outerEvents">
    <!-- 触发区域 -->
    <div :class="bem('trigger')" ref="triggerNode" v-on="events">
      <slot></slot>
    </div>
    <!-- 展示区域 -->
    <div v-if="isOpen" :class="bem('popper')" ref="popperNode">
      <slot name="content">content</slot>
      <div id="arrow" data-popper-arrow></div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive, onMounted, watch } from 'vue'
import { createCssScope } from '@/utils/bem'
import { createPopper, Instance } from '@popperjs/core'
import type { TooltipProps, TooltipEmits } from './tooltip'
import '../style/index'

const bem = createCssScope('tooltip')
defineOptions({
  name: 'YkTooltip',
})
const popperNode = ref<HTMLDivElement>()
const triggerNode = ref<Element>()
let popperInstance: Instance | null = null

// props属性
const props = withDefaults(defineProps<TooltipProps>(), {
  placement: 'bottom',
  // 默认是hover触发
  trigger: 'hover',
})
const $emits = defineEmits<TooltipEmits>()

const isOpen = ref(false)
function tooltipOpen() {
  isOpen.value = true
  $emits('visible-change', isOpen.value)
}
function tooltipClose() {
  isOpen.value = false
  $emits('visible-change', isOpen.value)
  console.log('value', isOpen.value)
}
watch(
  isOpen,
  (newValue) => {
    if (newValue) {
      if (triggerNode.value && popperNode.value) {
        // 打开状态，创建popperInstance实例
        popperInstance = createPopper(triggerNode.value, popperNode.value, {
          placement: 'left',
          modifiers: [
            {
              name: 'flip',
              options: { allowedAutoPlacements: ['top'] },
            },
          ],
        })
      } else {
        // 关闭状态，销毁popperInstance实例
        popperInstance?.destroy()
      }
    }
  },
  { flush: 'post' }
)

const events = reactive<Record<string, any>>({})
const outerEvents = reactive<Record<string, any>>({})
const attachEvents = () => {
  if (props.trigger === 'hover') {
    events['mouseenter'] = tooltipOpen
    outerEvents['mouseleave'] = tooltipClose
  } else {
    events['click'] = () => {}
  }
}
if (!props.manual) {
  attachEvents()
}
</script>

<style lang="scss" scoped></style>
