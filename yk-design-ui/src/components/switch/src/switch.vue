<template>
  <button
    :class="ykSwitchClass"
    :style="ykSwitchStyle"
    type="button"
    role="switch"
    :disabled="isDisabled"
    @click="handleClick"
  >
    <div class="yk-switch__dot">
      <div :class="{ circle: props.loading }"></div>
    </div>
  </button>
</template>

<script setup lang="ts">
import { ref, reactive, computed, onMounted, watch } from 'vue'
import type { ISwitchProps, valueType } from './type'
defineOptions({
  name: 'YkSwitch',
})

const props = withDefaults(defineProps<ISwitchProps>(), {
  size: 's',
  checkedValue: true,
  unCheckedValue: false,
  checkedColor: '#67c23a',
  uncheckedColor: '#eee',
  loading: false,
})
//控制选中与非选中的值
const currentValue = ref(props.modelValue)
watch(
  () => props.modelValue,
  (newValue) => {
    currentValue.value = newValue
  },
  { deep: true }
)
const handleClick = (e: Event) => {
  if (isDisabled.value) return
  //每次点击后取反，然后传递的默认选中值给currentValue
  if (!currentValue.value) {
    currentValue.value = props.checkedValue
  } else {
    currentValue.value = props.unCheckedValue
  }
  emits('update:modelValue', currentValue.value, e)
  emits('change', currentValue.value, e)
}
//是否默认选中状态
const isChecked = computed(() => {
  return currentValue.value == props.checkedValue
})
const isDisabled = computed(() => {
  return props.disabled || props.loading
})

const ykSwitchClass = computed(() => {
  return {
    'yk-switch': true,
    'yk-switch--isChecked': isChecked.value,
    'yk-switch--loading': props.loading,
    'yk-switch--disabled': props.disabled || props.loading,
    [`yk-switch--${props.size}`]: props.size,
  }
})

/* 动态控制选中与未选中的背景色 */

const ykSwitchStyle = computed(() => {
  return {
    backgroundColor:
      !!currentValue.value == !!props.checkedValue
        ? props.checkedColor
        : props.uncheckedColor,
  }
})

const emits = defineEmits<{
  (e: 'update:modelValue', value: valueType, event: Event): true
  (e: 'change', value: valueType, event: Event): true
}>()
</script>

<style lang="scss" scoped>
@import url('../style/index.scss');
</style>
