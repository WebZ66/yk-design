<template>
  <div
    :class="[
      bem(
        [],
        { prefix: !!$slots.prefix, suffix: !!$slots.suffix },
        {
          disabled: isDisabled,
          'yk-input-group': !!$slots.prepend || !!$slots.append,
          'yk-input-group--prepend': !!$slots.prepend,
          'yk-input-group--append': !!$slots.append,
        }
      ),
    ]"
    ref="wrapperRef"
  >
    <template v-if="type !== 'textarea'">
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
      <span v-if="$slots.suffix || clearable || showPassword" :class="bem('suffix')">
        <span class="yk-input__suffix-inner">
          <slot name="suffix"></slot>
          <YkIcon
            v-if="compValue.length && clearable && !showPassword"
            :icon="['fas', 'circle-xmark']"
            @click="clearValue"
          />

          <YkIcon v-if="passwordVisible && showPassword" :icon="['fas', 'eye']" @click="togglePasswordVisible"></YkIcon>
          <YkIcon
            v-if="!passwordVisible && showPassword"
            :icon="['fas', 'eye-low-vision']"
            @click="togglePasswordVisible"
          ></YkIcon>
        </span>
      </span>
      <!-- 输入框后置内容 -->
      <div v-if="$slots.append" class="yk-input-group__append">
        <slot name="append"></slot>
      </div>
    </template>
    <template v-else></template>
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive, computed, shallowRef, onMounted } from 'vue'
import { createCssScope } from '@/utils/bem'
import { InputProps, InputEmits } from './input'
import { useInput } from './useInput'
import { useFocusController } from '@/hooks'
import '../style'
const bem = createCssScope('input')
defineOptions({
  name: 'YkInput',
})
const props = withDefaults(defineProps<InputProps>(), {
  placeholder: '请输入内容',
  type: 'text',
  autocomplete: 'off',
})
const $emits = defineEmits<InputEmits>()
const {
  isDisabled,
  compValue,
  clearValue,
  passwordVisible,
  isPassword,
  togglePasswordVisible,
  // handleFocus,
  // handleBlur,
  handleChange,
} = useInput(props, $emits)

const inputRef = shallowRef<HTMLInputElement>()

const textareaRef = shallowRef<HTMLTextAreaElement>()
const _ref = computed(() => inputRef.value || textareaRef.value)

const { wrapperRef, isFocus, handleFocus, handleBlur } = useFocusController(_ref)

defineExpose({
  ref: inputRef,
})
</script>

<style scoped></style>
