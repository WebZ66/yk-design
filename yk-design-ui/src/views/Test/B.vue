<template>
  <div>
    我是B组件 {{ props.modelValue }}
    <button @click="handleClick">+</button>
    <hr />
    <div>B组件的插槽内容</div>
    <slot></slot>
    <hr />
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive, provide, toRefs, isShallow } from 'vue'
let props = defineProps(['modelValue'])
const emits = defineEmits(['update:modelValue', 'change'])
console.log(isShallow(props))
const radioGroupProps = reactive({
  isGroup: true,
})

const handleClick = () => {}

//radio-group传递给单个radio的必须是radio-group接收到的那个props对象，如果你重新创建一个，那么provide又不会重新调用
provide('radioGroupProps', props)
provide('changeRadio', (newValue: any) => {
  emits('update:modelValue', newValue)
  emits('change', newValue)
})
</script>

<style scoped></style>
