<template>
  <label role="radio" :class="bem([], { disabled, solid }, { isChecked })">
    <span :class="bem('input', [], {}, { isChecked })">
      <span :class="bem('inner')"></span>
      <input type="radio" :class="bem('original')" />
    </span>
    <span :class="bem('label')">
      <slot></slot>
    </span>
  </label>
</template>

<script lang="ts" setup>
import { ref, reactive, computed } from 'vue'
import { RadioProps, radioEmits } from './radio'
import { createCssScope } from '@/utils/bem'

defineOptions({
  name: 'YkRadio',
})
const bem = createCssScope('radio')
const emits = defineEmits(['update:modelValue', 'change'])
const props = withDefaults(defineProps<RadioProps>(), {
  solid: false,
  type: 'radio',
  size: 'l',
  disabled: false,
})
function handleClick() {
  isChecked.value = !isChecked.value
}

const isChecked = ref(true)
</script>

<style lang="scss" scoped>
@import '../style/radio.scss';
</style>
