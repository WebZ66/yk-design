<template>
  <div
    :class="[
      bem(
        [],
        { prefix: !!$slots.prefix, suffix: !!$slots.suffix },
        {
          disabled: false,
          'yk-input-group': !!$slots.prepend || !!$slots.append,
          'yk-input-group--prepend': !!$slots.prepend,
          'yk-input-group--append': !!$slots.append,
        }
      ),
    ]"
  >
    <!-- 输入框前置内容 -->
    <div v-if="$slots.prepend" class="yk-input-group__prepend">
      <slot name="prepend"></slot>
    </div>
    <!-- 表单输入控件 -->
    <input
      ref="inputRef"
      :type="isPassword"
      v-model="compValue"
      :class="[bem('inner')]"
      :placeholder="props.placeholder"
      @focus="handleFocus"
      @blur="handleBlur"
      @change="handleChange"
      :readonly="props.readonly"
    />
    <!-- 输入框头部内容 -->
    <span v-if="$slots.prefix" :class="bem('prefix')">
      <span>
        <slot name="prefix"></slot>
      </span>
    </span>
    <!-- 输入框尾部内容 -->
    <span
      v-if="$slots.suffix || clearable || showPassword"
      :class="bem('suffix')"
    >
      <span class="yk-input__suffix-inner">
        <slot name="suffix"></slot>
        <YkIcon
          v-if="compValue.length && clearable"
          name="cha_1"
          color="#c0c4cc"
          @click="clearValue"
        ></YkIcon>

        <YkIcon
          v-if="passwordVisible && showPassword"
          name="yanjing"
          color="#c0c4cc"
          @click="togglePasswordVisible"
        ></YkIcon>
        <YkIcon
          v-if="!passwordVisible && showPassword"
          name="biyan"
          color="#c0c4cc"
          @click="togglePasswordVisible"
        ></YkIcon>
      </span>
    </span>
    <!-- 输入框后置内容 -->
    <div v-if="$slots.append" class="yk-input-group__append">
      <slot name="append"></slot>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive, computed } from 'vue'
import { createCssScope } from '@/utils/bem'
import { InputProps, InputEmits } from './input'
import { useInput } from './useInput'
import '../style'
const bem = createCssScope('input')
defineOptions({
  name: 'YkInput',
})
const props = withDefaults(defineProps<InputProps>(), {
  placeholder: '请输入内容',
})
const $emits = defineEmits<InputEmits>()
const {
  compValue,
  clearValue,
  passwordVisible,
  isPassword,
  togglePasswordVisible,
  handleFocus,
  handleBlur,
  handleChange,
} = useInput(props, $emits)

const inputRef = ref<HTMLInputElement>()
defineExpose({
  ref: inputRef,
})
</script>

<style scoped></style>
