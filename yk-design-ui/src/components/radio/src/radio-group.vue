<template>
  <div>
    <slot />
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive, provide } from 'vue'
import { RadioGroupProps } from './radio-group'
defineOptions({
  name: 'YkRadioGroup',
})

// const props=defineProps([])

const props = withDefaults(defineProps<RadioGroupProps>(), {
  disabled: false,
})
const emits = defineEmits({
  'update:modelValue': (val) => val,
})

const changeEvent = (value: RadioGroupProps['modelValue']) => {
  emits('update:modelValue', value)
}

provide('propsByRadioGroup', {
  props,
  changeEvent,
})
</script>

<style scoped></style>
