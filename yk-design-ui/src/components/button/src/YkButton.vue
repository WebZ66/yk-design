<template>
  <button :class="ykButtonClass" :disabled="props.loading || props.disabled">
    <div :class="{ circle: props.loading }"></div>
    <slot name="icon"></slot>
    <slot></slot>
  </button>
</template>

<script setup lang="ts">
import type { ButtonProps } from './type'
import { computed } from 'vue'
defineOptions({
  name: 'YkButton',
})
const props = withDefaults(defineProps<ButtonProps>(), {
  type: 'primary',
  status: 'primary',
  size: 's',
  shape: 'default',
  long: false,
  loading: false,
  disabled: false,
})
const ykButtonClass = computed(() => {
  return {
    'yk-button': true,
    'yk-button--loading': props.loading,
    'yk-button--long': props.long,
    'yk-button--disabled': props.disabled || props.loading,
    [`yk-button--${props.status}`]: props.status,
    [`yk-button--${props.type}`]: props.type,
    [`yk-button--${props.size}`]: props.size,
    [`yk-button--${props.shape}`]: props.shape,
  }
})
</script>

<style lang="scss" scoped>
@import '../style/index.scss';
</style>
