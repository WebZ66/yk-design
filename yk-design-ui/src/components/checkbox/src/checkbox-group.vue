<template>
  <div>
    <slot></slot>
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive, provide } from 'vue'
import type { CheckboxGroupProps } from './checkbox-group-type'
const props = withDefaults(defineProps<CheckboxGroupProps>(), {
  disabled: false,
})

const emits = defineEmits(['update:modelValue'])

function changeEvent(value: CheckboxGroupProps['modelValue']) {
  emits('update:modelValue', value)
}

provide('propsByCheckboxGroup', {
  props,
  changeEvent,
})
</script>

<style scoped></style>
