<template>
  <div>
    我是B组件
    <hr />
    <div>B组件的插槽内容</div>
    <slot></slot>
    <hr />
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive, provide } from 'vue'
const props = defineProps<{ modelValue: number }>()
const emits = defineEmits(['update:modelValue'])
const a = ref(props.modelValue)
provide('radioProps', a)
provide('changeEvent', (newValue: any) => {
  emits('update:modelValue', newValue)
})
</script>

<style scoped></style>
