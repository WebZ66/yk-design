<template>
  <div>
    我是C组件
    <input
      type="radio"
      v-model="compValue"
      :value="props.label"
      @change="handleChange"
    />{{ props.label }}
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive, inject, computed, nextTick } from 'vue'
const props = defineProps(['label', 'modelValue'])
const radioGroupProps = inject<any>('radioGroupProps', undefined)
const changeRadio = inject<any>('changeRadio', undefined)

const emits = defineEmits(['update:modelValue', 'change'])

/* 因此想要通过v-model使其成为一组的radio，必须传同一个响应式变量。或者就是自己加个name属性 */
const isGroup = computed(() => {
  return radioGroupProps && radioGroupProps.isGroup
})

console.log(radioGroupProps)

const compValue = computed({
  get() {
    /*  if (isGroup.value) {
      console.log('radioGroups', radioGroupProps)
      return radioGroupProps.modelValue
    } else {
      return props.modelValue
    } */
    console.log('radioGroup', radioGroupProps.modelValue)
    return radioGroupProps.modelValue
  },
  set(newValue) {
    /*    if (isGroup.value) {
      changeRadio(newValue)
    } else {
      emits('update:modelValue', newValue)
    } */
    changeRadio(newValue)
  },
})

const handleChange = () => {
  nextTick(() => {})
}
</script>

<style scoped></style>
