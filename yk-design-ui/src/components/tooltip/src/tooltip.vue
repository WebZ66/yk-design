<template>
  <div :class="bem()" ref="containerNode" v-on="outerEvents">
    <!-- 触发节点 -->
    <div :class="bem('trigger')" ref="triggerNode" v-on="events" v-if="true">
      <slot></slot>
    </div>
    <slot v-else></slot>
    <transition :name="transition">
      <div :class="bem('popper')" ref="popperNode" v-on="dropdownEvents" v-if="visible"></div>
    </transition>
  </div>
</template>

<script lang="ts" setup>
import { ref, type Ref, computed, watchEffect, watch, onUnmounted } from 'vue'
import type { TooltipProps, TooltipEmits, EventListener, TooltipInstance } from './tooltip'
import { createCssScope } from '@/utils/bem'
import { debounce, type DebouncedFunc, bind } from 'lodash-es'
import { createPopper, type Instance } from '@popperjs/core'
import '../style/index'
const bem = createCssScope('tooltip')
defineOptions({
  name: 'YkTooltip',
})

const props = withDefaults(defineProps<TooltipProps>(), {
  placement: 'right',
  // 默认是hover触发
  trigger: 'hover',
  transition: 'fade-up',
  showTimeout: 40,
  hideTimeout: 200,
})
const $emits = defineEmits<TooltipEmits>()
const visible = ref(false)

const events: Ref<Record<string, EventListener>> = ref({})
const outerEvents: Ref<Record<string, EventListener>> = ref({})
const dropdownEvents: Ref<Record<string, EventListener>> = ref({})

const containerNode = ref<HTMLElement>()
const triggerNode = ref<HTMLElement>()
const popperNode = ref<HTMLElement>()

const popperOptions = computed(() => ({
  placement: props.placement,
  modifiers: [
    {
      name: 'offset',
      options: {
        offset: [0, 0],
      },
    },
  ],
  ...props.popperOptions,
}))
let popperInstance: null | Instance
function destroyPopperInstance() {
  if (popperInstance) {
    popperInstance.destroy()
    popperInstance = null
  }
}
//根据trigger重置所有的方法
function resetEvents() {
  events.value = {}
  outerEvents.value = {}
  dropdownEvents.value = {}
  attachEvents()
}

function setVisible(val: boolean) {
  if (props.disabled) return
  visible.value = val
  $emits('visible-change', visible.value)
}

function togglePopper() {
  visible.value ? closeFinal() : openFinal()
}

function attachEvents() {
  if (props.disabled || props.manual) return
  if (props.trigger === 'hover') {
    events.value['mouseenter'] = openFinal
    outerEvents.value['mouseleave'] = closeFinal
    dropdownEvents.value['mouseenter'] = openFinal
    return
  }
  if (props.trigger == 'click') {
    events.value['click'] = togglePopper
    return
  }
  if (props.trigger == 'contextmenu') {
    events.value['contextmenu'] = (e: Event) => {
      e.preventDefault()
      openFinal()
    }
    return
  }
}

//只有hover时才有延迟 延迟关闭是为了鼠标移动时，经过空隙不会直接关闭
const openDelay = computed(() => (props.trigger === 'hover' ? props.showTimeout : 0))
const closeDelay = computed(() => (props.trigger === 'hover' ? props.hideTimeout : 0))

let openDebounce: DebouncedFunc<() => void> | void
let closeDebounce: DebouncedFunc<() => void> | void

//控制弹出关闭
function openFinal() {
  console.log('open方法')
  //cancel防止时间太短，导致先关闭再open的情况
  closeDebounce?.cancel()
  openDebounce?.()
}
function closeFinal() {
  console.log('close方法')
  openDebounce?.cancel()
  closeDebounce?.()
}

const show: TooltipInstance['show'] = openFinal
const hide: TooltipInstance['hide'] = function () {
  //hide需要区分手动还是hover
  openDebounce?.cancel()
  setVisible(false)
}

watch(
  visible,
  (val) => {
    if (!val) return
    if (triggerNode.value && popperNode.value) {
      console.log('popperO', popperOptions.value)
      popperInstance = createPopper(triggerNode.value, popperNode.value, popperOptions.value)
    }
  },
  {
    flush: 'post',
  }
)

watch(
  () => props.manual,
  (isManual) => {
    if (isManual) {
      resetEvents()
      return
    }
    attachEvents()
  }
)

watch(
  () => props.trigger,
  (val, oldVal) => {
    if (val === oldVal) return
    openDebounce?.cancel()
    visible.value = false
    $emits('visible-change', visible.value)
    resetEvents()
  }
)

onUnmounted(() => {
  destroyPopperInstance()
})

watchEffect(() => {
  //setup时绑定所有的事件处理函数
  if (!props.manual) {
    attachEvents()
  }
  //设置带有延迟的开关方法
  openDebounce = debounce(bind(setVisible, null, true), openDelay.value)
  closeDebounce = debounce(bind(setVisible, null, false), closeDelay.value)
})

defineExpose<TooltipInstance>({
  show,
  hide,
})
</script>
