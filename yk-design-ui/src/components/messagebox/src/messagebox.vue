<template>
  <div>
    <transition name="fade-in-linear" @after-leave="destroy">
      <Overlay :z-index="state.zIndex" :mask="true">
        <div ref="dialog" class="yk-message-box-wrapper" @click="handleWrapperClick">
          <div ref="rootRef" :class="['yk-message-box', { 'is-center': state.center }, `${customClass}`]" @click.stop>
            <div
              v-if="state.title?.length"
              ref="headerRef"
              class="yk-message-box__header"
              :class="{ 'show-close': state.showClose }"
            >
              <div class="yk-message-box__title">
                <YkIcon v-bind="iconProp"></YkIcon>
                {{ state.title }}
              </div>
            </div>
            <YkIcon class="yk-icon__close" v-if="showClose" :icon="['fas', 'xmark']"></YkIcon>

            <div class="yk-message-box__content"></div>
            <div class="yk-message-box__footer">
              <YkButton type="primary">{{ confirmButtonText }}</YkButton>
            </div>
          </div>
        </div>
      </Overlay>
    </transition>
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive, computed, watch, nextTick } from 'vue'
import type { MessageBoxProps, MessageBoxAction } from './messagebox'
import type { InputInstance } from '@/components/input/src/input'
import { isFunction } from 'lodash-es'
import { iconNameMap } from '@/utils/shape'
import { YkIcon } from '@/components/icon/src/index'
import { useZIndex } from '@/hooks'

import '../style'

import Overlay from '@/components/overlay/src/overlay.vue'

defineOptions({
  name: 'YkMessageBox',
  inheritAttrs: false,
})
const props = withDefaults(defineProps<MessageBoxProps>(), {
  title: '默认标题',
  type: 'success',
  lockScroll: true,
  showClose: true,
  closeOnClickModal: true,
  confirmButtonType: 'primary',
  boxType: 'confirm',
  inputValue: '',
  inputPlaceholder: 'Please input...',
  confirmButtonText: 'OK',
  cancelButtonText: 'cancel',
  showConfirmButton: true,
  customClass: '',
})
const iconProp = computed(() => {
  return props.icon ? { icon: props.icon } : props.type ? iconNameMap[props.type] : null
})
const { nextZIndex } = useZIndex()

const { doAction } = props

const headerRef = ref<HTMLElement>()
const inputRef = ref<InputInstance>()

const state = reactive({
  ...props,
  zIndex: nextZIndex(),
})
watch(
  () => props.visible,
  (val) => {
    if (val) state.zIndex = nextZIndex()
    if (props.boxType != 'prompt') return
    if (!val) return
    nextTick(() => {
      inputRef.value && inputRef.value.focus()
    })
  }
)

const hasMessage = computed(() => !!state.message)

function handleWrapperClick() {
  props.closeOnClickModal && handleAction('close')
}

function handlerInputEnter(e: KeyboardEvent) {
  if (state.inputType === 'textarea') return
  e.preventDefault()
  return handleAction('confirm')
}

function handleAction(action: MessageBoxAction) {
  isFunction(props.beforeClose)
    ? props.beforeClose(action, state, () => doAction(action, state.inputValue))
    : doAction(action, state.inputValue)
}

function handleClose() {
  handleAction('close')
}
</script>

<style scoped></style>
