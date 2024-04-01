<template>
  <div>
    我是B组件 {{ modelValue }}

    <div>B组件的插槽内容</div>
    <slot></slot>
    <hr />
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive, provide, toRefs } from 'vue'
const props = defineProps(['modelValue'])
const emits = defineEmits(['update:modelValue', 'change'])

//第一种：将接收到的props直接传递给后代组件
//第二种，将props通过toRefs转化。toRefs会返回一个objectImpl对象，有get value和set value方法，它会修改props中对应的值
const radioGroupProps = reactive({
  isGroup: true,
  ...toRefs(props),
})

provide('radioGroupProps', radioGroupProps)
provide('changeRadio', (newValue: any) => {
  emits('update:modelValue', newValue)
  emits('change', newValue)
})
</script>

<style scoped></style>
