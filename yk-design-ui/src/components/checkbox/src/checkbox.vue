<template>
  <label role="checkbox" :class="bem([], {}, { isChecked, disabled })">
    <span :class="bem('input', [], {}, { isChecked, disabled })">
      <input v-model="compValue" type="checkbox" :class="bem('original')" />
      <span :class="bem('inner')"></span>
    </span>
    <span :class="bem('label')">备选项1</span>
  </label>
</template>

<script lang="ts" setup>
import { ref, reactive, computed } from 'vue'
import { createCssScope } from '@/utils/bem'
import { CheckboxProps } from './checkbox-type'
import '../style/index'
const bem = createCssScope('checkbox')

const props = withDefaults(defineProps<CheckboxProps>(), {
  modelValue: false,
})

const emits = defineEmits(['update:modelValue'])

const compValue = computed<CheckboxProps['modelValue']>({
  get() {
    return props.modelValue
  },
  set(newValue) {
    emits('update:modelValue', newValue)
  },
})

const isChecked = computed(() => !!props.modelValue)

const disabled = ref(false)
</script>

<style scoped></style>
