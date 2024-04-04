<template>
  <div>
    我是B组件 {{ modelValue }}
    <div>B组件的插槽内容</div>
    <slot></slot>
    <hr />
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive, provide, toRefs, isShallow } from 'vue'
let props = defineProps(['modelValue'])
const emits = defineEmits(['update:modelValue', 'change'])

const radioGroupProps = reactive({
  isGroup: true,
  ...toRefs(props),
})

const handleClick = () => {}

provide('radioGroupProps', radioGroupProps)
provide('changeRadio', (newValue: any) => {
  emits('update:modelValue', newValue)
  emits('change', newValue)
})
</script>

<style scoped></style>
