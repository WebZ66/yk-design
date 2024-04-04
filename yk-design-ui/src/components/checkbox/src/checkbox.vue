<template>
  <label role="checkbox" :class="bem([], {}, { isChecked, disabled })">
    <span :class="bem('input', [], {}, { isChecked, disabled })">
      <input
        v-model="compValue"
        type="checkbox"
        :checked="isChecked"
        :class="bem('original')"
      />
      <span :class="bem('inner')"></span>
    </span>
    <span :class="bem('label')">备选项1</span>
  </label>
</template>

<script lang="ts" setup>
import { createCssScope } from '@/utils/bem'
import { CheckboxProps, CheckboxEmits } from './checkbox-type'
import { useCheckbox } from './useCheckbox'
import '../style/index'
const bem = createCssScope('checkbox')

const props = withDefaults(defineProps<CheckboxProps>(), {
  modelValue: false,
})
const emits = defineEmits(CheckboxEmits)

const { compValue, isChecked, disabled } = useCheckbox(props, emits)
</script>

<style scoped></style>
