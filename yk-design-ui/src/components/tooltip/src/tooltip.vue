<template>
  <div :class="bem()" ref="popperContainNode" v-on="outerEvents">
    <!-- 触发区域 -->
    <div :class="bem('trigger')" ref="triggerNode" v-on="events">
      <slot></slot>
    </div>
    <!-- 展示区域 -->
    <div v-if="isOpen" ref="popperNode">
      <div :class="bem('popper')">
        <div name="content">{{ content }}</div>
      </div>
      <div id="arrow" data-popper-arrow></div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive, onMounted, watch } from 'vue'
import { createCssScope } from '@/utils/bem'
import { createPopper, Instance, Placement } from '@popperjs/core'
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
  placement: 'top',
  // 默认是hover触发
  trigger: 'hover',
  content: '触发的一段文字',
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
      console.log('props', props.placement)
      if (triggerNode.value && popperNode.value) {
        // 打开状态，创建popperInstance实例
        const arrow = document.querySelector('#arrow')
        popperInstance = createPopper(triggerNode.value, popperNode.value, {
          placement: props.placement as Placement,
          modifiers: [
            {
              name: 'offset',
              options: {
                offset: [0, 15],
              },
            },
            {
              name: 'flip',
              options: { allowedAutoPlacements: ['bottom'] },
            },
            {
              name: 'arrow',
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
