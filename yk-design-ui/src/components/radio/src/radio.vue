<template>
  <label role="radio" :class="bem([], { disabled, solid }, { isChecked })">
    <span :class="bem('input', [], {}, { isChecked })">
      <span :class="bem('inner')"></span>
      <input
        v-model="compVModel"
        :value="props.value"
        :disabled="disabled"
        type="radio"
        :class="bem('original')"
        @change="handleChange"
      />
    </span>
    <span :class="bem('label')">
      <slot></slot>
    </span>
  </label>
</template>

<script lang="ts" setup>
import { RadioProps, radioEmits } from './radio'
import { createCssScope } from '@/utils/bem'
import { useRadio } from './useRadio'

defineOptions({
  name: 'YkRadio',
})
const bem = createCssScope('radio')
const emits = defineEmits(radioEmits)
const props = withDefaults(defineProps<RadioProps>(), {
  solid: false,
  type: 'radio',
  size: 'l',
  disabled: false,
})

const { compVModel, disabled, isChecked } = useRadio(props, emits)

function handleChange() {}
</script>

<style lang="scss" scoped>
@import '../style/radio.scss';
</style>
