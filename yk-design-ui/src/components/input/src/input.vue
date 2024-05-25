<template>
  <div :class="[bem([], {}, { disabled: false })]">
    <!-- 输入框前置内容 -->
    <div class="yk-input-group__prepend"></div>
    <!-- 表单输入控件 -->
    <input
      v-model="compValue"
      :class="[bem('inner')]"
      placeholder="请输入内容"
    />
    <!-- 输入框头部内容 -->
    <span :class="bem('prefix')"></span>
    <!-- 输入框尾部内容 -->
    <span :class="bem('suffix')"></span>
    <!-- 输入框后置内容 -->
    <div class="yk-input-group__append"></div>
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive, computed } from 'vue'
import { createCssScope } from '@/utils/bem'
import { InputProps, InputEmits } from './input'
import '../style'
const bem = createCssScope('input')
defineOptions({
  name: 'YkInput',
})

const props = withDefaults(defineProps<InputProps>(), {})
const $emits = defineEmits<InputEmits>()
const compValue = computed<InputProps['modelValue']>({
  get() {
    return props.modelValue
  },
  set(newValue) {
    $emits('update:modelValue', newValue)
  },
})
</script>

<style scoped></style>
