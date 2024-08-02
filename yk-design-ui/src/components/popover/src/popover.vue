<template>
  <div class="main" :x-placement="props.placement" v-on="outerEvents">
    <div data-reference="reference" ref="reference">
      <slot name="reference"></slot>
    </div>
    <Teleport to="body">
      <Transition name="fade">
        <div class="yk-popper" :class="props.popoverClass" ref="floating" v-if="show" :style="floatingStyles">
          <div
            ref="floatingArrow"
            class="arrow"
            :x-placement="props.placement"
            :style="{
              position: 'absolute',
            }"
          ></div>
          <div class="content" :x-placement="props.placement" :style="{ width: props.width }">
            <slot></slot>
          </div>
        </div>
      </Transition>
    </Teleport>
  </div>
</template>
<script lang="ts" setup>
import { arrow, useFloating, offset, flip, shift } from '@floating-ui/vue'
import { onMounted, ref, watch, reactive, useSlots } from 'vue'
import type { PopoverProps, PopoverEmit } from './popover'
import '../style/index'
const reference = ref<HTMLDivElement>()
const floating = ref<HTMLDivElement>()
const floatingArrow = ref<HTMLDivElement>()
const props = withDefaults(defineProps<PopoverProps>(), {
  placement: 'top',
  width: '150px',
  trigger: 'hover',
})
const $slot = useSlots()

const $emit = defineEmits<PopoverEmit>()
const show = ref(false)
const outerEvents = reactive<Record<string, any>>({})
function attachEvents() {
  if (props.trigger == 'hover') {
    outerEvents['mouseover'] = openPopover
    outerEvents['mouseleave'] = hidePopover
  } else if (props.trigger == 'click') {
    outerEvents['click'] = () => {
      show.value = !show.value
      show.value ? $emit('show') : $emit('hide')
    }
  } else {
    outerEvents['click'] = (e: Event) => {
      const element = e.target as Element
      if (reference.value!.contains(element)) show.value = !show.value
      show.value ? $emit('show') : $emit('hide')
    }
  }
}
attachEvents()

function openPopover() {
  show.value = true
  $emit('show')
}
function hidePopover() {
  show.value = false
  $emit('hide')
}

const { floatingStyles, middlewareData } = useFloating(reference, floating, {
  placement: props.placement,
  middleware: [offset(0), flip(), arrow({ element: floatingArrow })],
})

watch(
  middlewareData,
  (newValue) => {
    floatingArrow.value!.style.left = newValue.arrow!.x + 'px'
  },
  { deep: true }
)

defineExpose({
  show() {
    show.value = true
  },
  hide() {
    show.value = false
  },
})
</script>
